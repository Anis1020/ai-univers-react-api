import { createBrowserRouter } from "react-router-dom";
import Layouts from "../layouts/Layouts";
import HomePage from "../pages/HomePage";
import Contact from "../pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
