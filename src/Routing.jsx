import { createBrowserRouter } from "react-router-dom";
import { Root } from "./Component/Root/Root";
import { Home } from "./Component/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [{ path: "/", element: <Home /> }],
  },
]);
