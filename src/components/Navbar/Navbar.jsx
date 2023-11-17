import { Link } from "react-router-dom";

const Navbar = () => {
    const navLinks = <>
        <li><Link to="/">Home</Link></li>  
        <li><Link to="/services">Services</Link></li>  
        <li><Link to="/app">Appointment</Link></li>  
        <li><Link to="/details">Details</Link></li>  
    </>
    return (
        <div className="navbar bg-base-100 w-3/4 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="text-2xl font-semibold" href=""><span className="text-orange-400 mr-1 text-2xl">Doc</span>House</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">LOGIN</a>
            </div>
        </div>
    );
};

export default Navbar;