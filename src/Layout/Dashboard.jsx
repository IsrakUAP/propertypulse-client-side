import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className=" space-x-3 flex m-4">
            <div className=" min-h-full bg-green-400 w-63">
                <ul className="menu p-4">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/dashboard/myProfile">My Profile</NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to="/dashboard/wishlist">Wishlist</NavLink></li>
                    <li><NavLink to="/dashboard/propertyBought">Property bought</NavLink></li>
                    <li><NavLink to="/dashboard/myReviews">My reviews</NavLink></li>

                </ul>

            </div>
            <div className=" flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;