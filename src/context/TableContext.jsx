import { createContext, useState, useEffect } from "react";
import { DataKaryawan as dakar } from "../utils/dummy";

const TableContext = createContext();
const TableContextProvider = ({ children }) => {
  const [datas, setDatas] = useState([]);
  const [colNames, setColNames] = useState([]); //Object.keys(datas[0]);
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const handleDatesChange = (newValue) => {
    console.log("newValue:", newValue);
    setDates(newValue);
  };

  const handleData = () => {
    const savedData = localStorage.getItem("dataKaryawan");

    if (savedData) {
      setDatas(JSON.parse(savedData));
    } else {
      setDatas(dakar);
      localStorage.setItem("dataKaryawan", JSON.stringify(dakar));
    }
    setColNames(Object.keys(dakar[0]));
  };

  const changefilterData = (e) => {
    console.log(e.target.value);
    console.log("trigered");

    if (e.target.value === "") {
      setDatas(dakar);
    } else {
      setDatas(datas.filter((item) => item.nik === e.target.value));
    }
  };
  // useEffect(() => {
  //   const savedData = localStorage.getItem("dataKaryawan");
  //   if (savedData) {
  //     setDatas(JSON.parse(savedData));
  //   }
  // }, []);

  // useEffect(() => {
  //   const savedData = localStorage.getItem("dataKaryawan");
  //   if (savedData) {
  //     setDatas(JSON.parse(savedData));
  //   }
  // }, [datas]);

  useEffect(() => {
    handleData();
  }, []);

  useEffect(() => {}, [datas]);

  return (
    <TableContext.Provider
      value={{
        datas,
        setDatas,
        handleData,
        colNames,
        changefilterData,
        dates,
        handleDatesChange,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};

export { TableContext, TableContextProvider };
