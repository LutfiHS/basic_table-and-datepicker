import { createContext, useState, useEffect } from "react";
import { DataKaryawan as dakar } from "../utils/dummy";

const TableContext = createContext();
const TableContextProvider = ({ children }) => {
  const [datas, setDatas] = useState([]);
  const [searchNik, setSearchNik] = useState("");
  const [colNames, setColNames] = useState([]); //Object.keys(datas[0]);
  const [valuetable, setValuetable] = useState([]);
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });


// ! pertama
  const handleData = () => {
    const savedData = localStorage.getItem("dataKaryawan");

    if (savedData !== "[]") {
      // const savedData = localStorage.getItem("dataKaryawan");
      setDatas(JSON.parse(savedData));
      setValuetable(JSON.parse(savedData));
      console.log("ambil dari local: ", savedData);
    } else {
      setDatas(dakar);
      setValuetable(dakar);
      localStorage.setItem("dataKaryawan", JSON.stringify(dakar));
      console.log("ambil dari dakar");
    }
    setColNames(Object.keys(dakar[0]));
  };

  // ! kedua
  const handleChangeDatas = (e, nik) => {
    console.log("newValue:", e.target.value, "index:", nik);
    const { name, value } = e.target;
    setDatas((prevDatas) => {
      const newDatas = prevDatas.map((data) => {
        if (data.nik === nik) {
          return { ...data, [name]: value };
        }
        return data;
      });
      return newDatas;
    });
  };

  // ! ketiga
  const changefilterData = (e) => {
    setSearchNik(e.target.value);
    const savedData = localStorage.getItem("dataKaryawan");

    if (e.target.value === "") {
      setValuetable(datas);
    } else {
      // setValuetable(JSON.parse(savedData));
      setValuetable(datas.filter((item) => item.nik === e.target.value));
      console.log("filter data");
    }
  };

  const handleDatesChange = (newValue) => {
    console.log("newValue:", newValue);
    setDates(newValue);

    console.log("set start date to:", newValue.startDate);
    setValuetable(
      datas.filter(
        (item) =>
          item.tanggal_pengajuan >= newValue.startDate &&
          item.tanggal_pengajuan <= newValue.endDate
      )
    );
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
    localStorage.setItem("dataKaryawan", JSON.stringify(datas));
  }, [datas]);

  return (
    <TableContext.Provider
      value={{
        datas,
        handleData,
        colNames,
        changefilterData,
        dates,
        handleDatesChange,
        searchNik,
        handleChangeDatas,
        valuetable
        // handleView,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};

export { TableContext, TableContextProvider };
