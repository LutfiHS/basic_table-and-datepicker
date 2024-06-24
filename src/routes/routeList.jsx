import { createBrowserRouter } from "react-router-dom";
import Employee from "../pages/Employee";
import Picincentive from "../pages/PicIncentive";
export const routeList = createBrowserRouter([
  {
    path: "/",
    element: <Picincentive />,
  },
  {
    path: "/employee",
    element: <Employee />,
  },
]);
