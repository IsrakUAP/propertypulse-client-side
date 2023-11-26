import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import AllPropertiesPage from "../pages/AllPropertiesPage/AllPropertiesPage";
import DetailsPage from "../pages/DetailsPage/DetailsPage";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path:"/allProperties",
          element:<AllPropertiesPage></AllPropertiesPage>
        },
        {
          path:"/details/:_id",
          element:<DetailsPage></DetailsPage>
        }

      ]
    },
  ]);