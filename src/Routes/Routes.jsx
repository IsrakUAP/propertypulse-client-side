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
import Dashboard from "../Layout/Dashboard";
import Wishlist from "../pages/Dashboard/Wishlist/Wishlist";
import MyProfile from "../pages/Dashboard/myProfile/myProfile";
import MakeOfferPage from "../pages/Dashboard/MakeOfferPage/MakeOfferPage";


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
          element:<PrivateRoute><DetailsPage></DetailsPage></PrivateRoute>
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
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: 'wishlist',
          element:<Wishlist></Wishlist>
        },
        {
          path: 'myProfile',
          element:<MyProfile></MyProfile>
        },
        {
          path: '/dashboard/makeOfferPage/:propertyId',
          element:<MakeOfferPage></MakeOfferPage>
        }
      ]
    },
  ]);