// import { DataKaryawan as dakar } from "../../utils/dummy";
import { useContext, useEffect } from "react";
import "./TableEmployee.css";

import { TableContext } from "../../context/TableContext";
import Datepicker from "react-tailwindcss-datepicker";
const TableEmployee = (props) => {
  const {
    datas,
    colNames,
    changefilterData,
    handleDatesChange,
    dates,
    handleData,
    handleChangeDatas,
    valuetable
  } = useContext(TableContext);

  const formatNumber = (number) => {
    return number
      .toFixed(2) // Ensure two decimal places
      .replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Add commas as thousand separators
  };

  const handleonChange = (e) => {
    console.log("newValue:", e.target.value);
  };

  useEffect(() => {
    // handleData();
    if (props.Editing === true) {
      handleData();
    } else {
      changefilterData({ target: { value: 0 } });
    }
  }, []);

  return (
    <div className="mt-0 w-full h-full p-8">
      <div className="m-auto flex flex-col justify-start gap-2">
        <div className="flex justify-between mr-4 ml-4">
          <div className="flex h-10 w-fit gap-4 justify-center items-center">
            <input
              defaultValue=""
              className=" self-start w-72 border border-gray-300 rounded-md p-1"
              type="text"
              placeholder="search NIK"
              onChange={changefilterData}
            />
            {props.Editing === true ? (
              <div className="flex gap-4">
                <Datepicker
                  classNames="w-72"
                  primaryColor={"blue"}
                  value={dates}
                  onChange={handleDatesChange}
                />

                <a
                  href="#"
                  className="justify-center w-72 bg-gray-300 hover:bg-gray-400 text-sm text-gray-700 font-semibold py-1 px-2 rounded inline-flex items-center"
                >
                  <svg
                    className="fill-current w-3 h-3 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                  </svg>
                  <span>Download All</span>
                </a>
              </div>
            ) : (
              false
            )}
          </div>
          {props.Editing ? (
            <button
              type="button"
              className="mr-8 text-center justify-self-end inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 hover:underline m-2"
            >
              Simpan Perubahan
            </button>
          ) : (
            false
          )}
        </div>
        <div className="high-table w-full overflow-x-auto">
          <div className="">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="border rounded-lg shadow">
                <table className="min-w-full divide-y divide-gray-200 ">
                  <thead className="bg-gray-50">
                    <tr>
                      {colNames.map((item, index) => (
                        <th
                          scope="col"
                          className={
                            item === "name"
                              ? "px-2 py-2 text-start text-xs font-medium text-gray-500 uppercase "
                              : "px-2 py-2 text-start text-xs font-medium text-gray-500 uppercase "
                          }
                          key={index}
                        >
                          {item === "sanksi_aktif"
                            ? props.Editing === true
                              ? item
                              : false
                            : item !== "sanksi_aktif"
                            ? props.Editing === true && item === "dokumen"
                              ? false
                              : item
                            : item}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {valuetable.map((item, rowindex) => (
                      <tr key={rowindex}>
                        {colNames.map((col, colindex) => (
                          <td
                            className={
                              col === "name"
                                ? "h-20 w-52 px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-800 "
                                : "h-20 w-52 px-2 py-2 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-700"
                            }
                            key={colindex}
                          >
                            {col === "posisi" ? (
                              <p className="w-52">{item[col]}</p>
                            ) : col === "status_pengajuan" ? (props.Editing === true ? (
                              <select
                                type="text"
                                defaultValue={item[col]}
                                name="status_pengajuan"
                                onChange={(e) =>
                                  handleChangeDatas(e, item.nik)
                                }
                              >
                                <option value={item[col]}>{item[col]}</option>
                                <option value="belum diajukan">belum diajukan</option>
                                <option value="dalam pengajuan">dalam pengajuan</option>
                                <option value="sudah diajukan">sudah diajukan</option>
                              </select>
                            ) : <p className="min-w-14">{item[col]}</p>) : col === "keterangan" ? (
                              props.Editing === true ? (
                                <select
                                  type="text"
                                  defaultValue={item[col]}
                                  name="keterangan"
                                  onChange={(e) =>
                                    handleChangeDatas(e, item.nik)
                                  }
                                >
                                  <option value={item[col]}></option>
                                  <option value="funding">funding</option>
                                  <option value="hold">hold</option>
                                  <option value="hak">hak</option>
                                </select>
                              ) : (
                                <p className="min-w-14">{item[col]}</p>
                              )
                            ) : col === "notes" ? (
                              props.Editing === true ? (
                                <input
                                  className="w-40 border border-gray-300 rounded-md p-1"
                                  type="text"
                                  defaultValue={item[col]}
                                  name="notes"
                                  onChange={(e) =>
                                    handleChangeDatas(e, item.nik)
                                  }
                                />
                              ) : (
                                <p className="w-40">{item[col]}</p>
                              )
                            ) : col == "dokumen" ? (
                              props.Editing === true ? (
                                //   <a
                                //     href={item[col]}
                                //     className="bg-gray-300 hover:bg-gray-400 text-sm text-gray-700 font-semibold py-1 px-2 rounded inline-flex items-center"
                                //   >
                                //     <svg
                                //       className="fill-current w-3 h-3 mr-2"
                                //       xmlns="http://www.w3.org/2000/svg"
                                //       viewBox="0 0 20 20"
                                //     >
                                //       <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                                //     </svg>
                                //     <span>Download</span>
                                //   </a>
                                // )
                                false
                              ) : (
                                <div className="flex flex-col gap-1 max-w-56">
                                  <input className="w-fit" type="file" />
                                  <button className="w-24 bg-gray-300 hover:bg-gray-400 text-sm text-gray-700 font-semibold py-1 px-2 rounded inline-flex items-center">
                                    <p>Upload</p>
                                  </button>
                                </div>
                              )
                            ) : col === "sanksi_aktif" ? (
                              props.Editing === true ? (
                                item[col]
                              ) : (
                                false
                              )
                            ) : col !== "sanksi_aktif" ? (
                              col === "cp" ||
                              col === "saving" ||
                              col === "insentif_reguler" ||
                              col === "total" ? (
                                formatNumber(item[col])
                              ) : (
                                item[col]
                              )
                            ) : (
                              false
                            )}
                          </td>
                        ))}
                        <td></td>
                        <td>
                          {/* todo : untuk merubah data sepertinya ke rowindex dan col */}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TableEmployee;
