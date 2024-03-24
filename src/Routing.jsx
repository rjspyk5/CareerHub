import { createBrowserRouter } from "react-router-dom";
import { Root } from "./Component/Root/Root";
import { Home } from "./Component/Home/Home";
import { ErrorPage } from "./Component/ErrorPage/ErrorPage";
import axios from "axios";
import { JobDetails } from "./Component/FetauredJob/JobDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "*",
        element: <ErrorPage />,
      },
      {
        path: "/post/:id",
        element: <JobDetails />,
        loader: () => axios.get("/jobs.json"),
      },
    ],
  },
]);
