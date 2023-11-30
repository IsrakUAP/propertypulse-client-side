import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { getAuth } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import useWishlist from "../../../Hooks/useWishlist";


const Navbar = () => {
    const {user,logOut,createUser} = useContext(AuthContext);
    const [wishlist] = useWishlist();
    const [displayName, setDisplayName] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    useEffect(() => {
        const auth = getAuth();
        const currentUser = auth.currentUser;

        if (currentUser) {
            setDisplayName(currentUser.displayName);
            setPhotoURL(currentUser.photoURL);
        }
    }, [user,createUser]);


    const handleSignOut = () =>{
        logOut()

    }

    return (
        <nav className="navbar flex items-center bg-gray-300 justify-between px-6 mx-auto">
        <div className="navbar-start">
            <NavLink to="/" className="font-bold text-lg flex items-center -ml-5 px-2">
                <img src="https://propertypulse.io/wp-content/uploads/2023/04/WhatsApp_Image_2023-04-17_at_1.27.30_PM__1_-removebg-preview.png" alt="Logo" className="w-30 h-10" />
                <span>PropertyPulse</span>
            </NavLink>
        </div>
   
        <div className="navbar-center flex space-x-4 lg:inline hidden">
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "hover:text-green-500 underline font-semibold text-[18px]" : "font-semibold text-[18px]"
                }
            >
                Home
            </NavLink>
            <NavLink to="/allProperties" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "hover:text-green-500 underline font-semibold text-[18px]" : "font-semibold text-[18px]"
            }>
                All Properties
            </NavLink>
            <NavLink to="/dashboard" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "hover:text-green-500 underline font-semibold text-[18px]" : "font-semibold text-[18px]"
            }>
                Dashboard
            </NavLink>
        </div>
    
        <div className="navbar-end">
            {user ? (
                <div className="flex items-center space-x-2">
                    <img className="rounded-full h-8 w-8" src={photoURL} alt="User" />
                    <p className="text-gray-700">{displayName}</p>
                    <button onClick={handleSignOut} className="btn">Sign Out</button>
                </div>
            ) : (
                <Link to="/login" className="text-black hover:text-gray-300" activeClassName="font-bold">
                    <button className="btn">Login</button>
                </Link>
            )}
        </div>
        <Link to="/dashboard/wishlist">
            <div className="lg:hidden rounded-lg bg-gray-300 p-3" style={{ position: 'fixed', bottom: '10px', right: '10px' }}>
                <img className="h-10" src="https://cdn4.iconfinder.com/data/icons/ui-elements-29/64/Add-Bookmark-save-wishlist-ui-512.png" alt="" />
                <span className="ml-[6px] badge badge-neutral ">{wishlist.length}</span>
            </div>
        </Link>
    </nav>
    
    );
};

export default Navbar;