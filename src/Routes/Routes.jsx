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
import AdminProfile from "../pages/Dashboard/AdminProfile/AdminProfile";
import ManageProperties from "../pages/Dashboard/ManageProperties/ManageProperties";
import AgentProfile from "../pages/Dashboard/AgentProfile/AgentProfile";
import AddProperty from "../pages/Dashboard/AddProperty/AddProperty";
import MyProperties from "../pages/Dashboard/MyProperties/MyProperties";
import UpdatePropertyPage from "../pages/Dashboard/UpdatePropertyPage/UpdatePropertyPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MySoldProperties from "../pages/Dashboard/MySoldProperties/MySoldProperties";
import RequestedOfferedProperties from "../pages/Dashboard/RequestedOfferedProperties/RequestedOfferedProperties";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
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
        },
        {
           path:'adminProfile',
           element:<AdminProfile></AdminProfile>
        },
        {
          path:'manageProperties',
          element: <ManageProperties></ManageProperties>
        },
        {
          path:'agentProfile',
          element: <AgentProfile></AgentProfile>
        },
        {
          path:'addProperty',
          element:<AddProperty></AddProperty>
        },
        {
          path:'myProperties',
          element:<MyProperties></MyProperties>
        },
        {
          path: 'updatePropertyPage/:propertyId',
          element:<UpdatePropertyPage></UpdatePropertyPage>
        },
        {
          path: 'soldProperties',
          element: <MySoldProperties></MySoldProperties>
        },
        {
          path: 'requestedProperties',
          element: <RequestedOfferedProperties></RequestedOfferedProperties>
        }
      ]
    },
  ]);