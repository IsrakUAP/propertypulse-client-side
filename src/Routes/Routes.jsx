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
import PropertyBought from "../pages/Dashboard/PropertyBought/PropertyBought";
import Myreviews from "../pages/Dashboard/Myreviews/Myreviews";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import ManageReviews from "../pages/Dashboard/ManageReviews/ManageReviews";


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
      element: <PrivateRoute> <Dashboard></Dashboard> </PrivateRoute>,
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
        },
        {
          path: 'propertyBought',
          element:<PropertyBought></PropertyBought>
        },
        {
          path: 'myReviews',
          element:<Myreviews></Myreviews>
        },
        // admin
        {
          path: 'manageUsers',
          element: <ManageUsers></ManageUsers>
        },
        {
          path: 'manageReviews',
          element: <ManageReviews></ManageReviews>
        }
      ]
    },
  ]);