import { routeList } from "./routes/routeList";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <RouterProvider router={routeList} fallbackElement={<p>loading...</p>} />
  );
}

export default App;
