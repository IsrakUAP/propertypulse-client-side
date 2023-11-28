import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import AllPropertiesPage from "../pages/AllPropertiesPage/AllPropertiesPage";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";


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
          element:<PrivateRoute><AllPropertiesPage></AllPropertiesPage></PrivateRoute>
        },
        {
          path:"/details/:_id",
          element:<DetailsPage></DetailsPage>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/register",
          element:<Register></Register>
        }

      ]
    },
  ]);