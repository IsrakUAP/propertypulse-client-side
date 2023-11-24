import { NavLink } from "react-router-dom";


const Navbar = () => {

    return (
        <nav className="grid grid-cols-4 py-3 gap-4">
            <div>
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? " hover:text-green-300 underline font-semibold text-[18px]" : "font-semibold text-[18px]"
                    }
                >
                    Home
                </NavLink>
            </div>
            <div>
                <NavLink to="/allProperties" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? " hover:text-green-300 underline font-semibold text-[18px]" : "font-semibold text-[18px]"
                }>
                    All Properties
                </NavLink>
            </div>
            <div>
                <NavLink to="/dashboard" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? " hover:text-green-300 underline font-semibold text-[18px]" : "font-semibold text-[18px]"
                }>
                    Dashboard
                </NavLink>
            </div>
            <div>
                <NavLink to="/login" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? " hover:text-green-300 underline font-semibold text-[18px]" : "font-semibold text-[18px]"
                }>
                    Login
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;