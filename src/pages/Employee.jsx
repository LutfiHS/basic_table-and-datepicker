import { useContext } from "react";
import { TableContext } from "../context/TableContext";
import TableEmployee from "./component/TableEmployee";
import DefaultSidebar from "./component/Sidebar";
const Employee = () => {
  return (
    <div className="w-full">
      <div className="flex">
        <DefaultSidebar />

        <div className="p-0 w-fit">
          <div>
            <h1 className="text-2xl ml-12 mt-12 p-0">Employee Page</h1>
            <TableEmployee Editing={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
