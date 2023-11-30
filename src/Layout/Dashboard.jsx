import { NavLink, Outlet } from "react-router-dom";
import useWishlist from "../Hooks/useWishlist";
import { Helmet } from "react-helmet-async";


const Dashboard = () => {
    const [wishlist] = useWishlist();

    return (
        <div className=" space-x-3 flex m-4">
            <Helmet>
                <title>PropertyPulse | DashBoard</title>
            </Helmet>
            <div className=" min-h-full bg-green-400 w-63">
                <ul className="menu p-4">
                    <li><NavLink to="/">Home</NavLink></li>
                    <div className="divider">User</div>

                    <li><NavLink to="/dashboard/myProfile">My Profile</NavLink></li>
                    <li><NavLink to="/dashboard/wishlist">Wishlist({wishlist.length})</NavLink></li>
                    <li><NavLink to="/dashboard/propertyBought">Property bought</NavLink></li>
                    <li><NavLink to="/dashboard/myReviews">My reviews</NavLink></li>

                    <div className="divider">Agent</div>
                    <li><NavLink to="/dashboard/agentProfile">Agent Profile</NavLink></li>
                    <li><NavLink to="/dashboard/addProperty">Add Property</NavLink></li>
                    <li><NavLink to="/dashboard/myProperties">My Added Properties</NavLink></li>
                    <li><NavLink to="/dashboard/soldProperties">My Sold Properties</NavLink></li>
                    <li><NavLink to="/dashboard/requestedProperties">Requested Properties</NavLink></li>


                    <div className="divider">Admin</div>
                    <li><NavLink to="/dashboard/adminProfile">Admin Profile</NavLink></li>
                    <li><NavLink to="/dashboard/manageProperties">Manage Properties</NavLink></li>
                    <li><NavLink to="/dashboard/manageUsers">Manage Users</NavLink></li>
                    <li><NavLink to="/dashboard/manageReviews">Manage Reviews</NavLink></li>



                </ul>

            </div>
            <div className=" flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;