import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TableContextProvider } from "./context/TableContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TableContextProvider>
      <App />
    </TableContextProvider>
  </React.StrictMode>
);
