import { createContext, useState } from "react";
const TableContext = createContext();
const TableContextProvider = ({ children }) => {
  const [editTable, setEditsTable] = useState(false);

  return (
    <TableContext.Provider value={{ editTable, setEditsTable }}>
      {children}
    </TableContext.Provider>
  );
};

export { TableContext, TableContextProvider };
