import { NavLink } from "react-router-dom";


const Navbar = () => {

    return (
        <nav className=" navbar flex items-center justify-between py-4 mx-auto">
            <div className="navbar-start">
                <NavLink to="/" className="font-bold text-lg flex items-center -ml-4">
                    <img src="https://propertypulse.io/wp-content/uploads/2023/04/WhatsApp_Image_2023-04-17_at_1.27.30_PM__1_-removebg-preview.png" alt="Logo" className="w-30 h-10" />
                    <span>PropertyPulse</span>
                </NavLink>
            </div>
            <div className="navbar-center flex">
                <div className="space-x-4 inline-block">
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "hover:text-green-300 underline font-semibold text-[18px]" : "font-semibold text-[18px]"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink to="/allProperties" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "hover:text-green-300 underline font-semibold text-[18px]" : "font-semibold text-[18px]"
                    }>
                        All Properties
                    </NavLink>
                    <NavLink to="/dashboard" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "hover:text-green-300 underline font-semibold text-[18px]" : "font-semibold text-[18px]"
                    }>
                        Dashboard
                    </NavLink>
                </div>
            </div>
            <div className="navbar-end">
                <NavLink to="/login" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "hover:text-green-300 underline font-semibold text-[18px]" : "font-semibold text-[18px]"
                }>
                    Login
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;