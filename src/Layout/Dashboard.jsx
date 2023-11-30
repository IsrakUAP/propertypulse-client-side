import { NavLink, Outlet } from "react-router-dom";
import useWishlist from "../Hooks/useWishlist";
import useReviews from "../Hooks/useReviews";
import useAdmin from "../Hooks/useAdmin";


const Dashboard = () => {
    const [wishlist] = useWishlist();
    const [reviews] = useReviews();
  
    return (
        <div className=" space-x-3 flex m-4">
            <div className=" min-h-full bg-green-400 w-63">
                <ul className="menu p-4">
                    <li><NavLink to="/">Home</NavLink></li>
                    <div className="divider">User</div>
                          
                                <li><NavLink to="/dashboard/myProfile">My Profile</NavLink></li>
                                <li><NavLink to="/dashboard/wishlist">Wishlist({wishlist.length})</NavLink></li>
                                <li><NavLink to="/dashboard/propertyBought">Property bought</NavLink></li>
                                <li><NavLink to="/dashboard/myReviews">My reviews({reviews.length})</NavLink></li>

                                <div className="divider">Admin</div>
                                <li><NavLink to="/dashboard/adminProfile">Admin Profile</NavLink></li>
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