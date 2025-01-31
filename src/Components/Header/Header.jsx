import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="m-auto flex items-center justify-between p-4 shadow-2xl">
            <div className="flex items-center justify-center">
                <img src="https://www.bookit.co.nz/wp-content/themes/bookeasy/assets/images/logo/bookit-logo-2x.png" className="h-20 w-52 rounded-2xl mx-6 md:mx-24" alt="Logo" />
            </div>
            <div className="hidden md:flex space-x-10">
                <NavLink to="/" exact className="font-medium" activeClassName="text-fuchsia-800">
                    Home
                </NavLink>
                <NavLink to="/About" className="font-medium" activeClassName="text-fuchsia-800">
                    <i className="bi bi-heart"></i> About Us
                </NavLink>
                <NavLink to="/Favourites" className="font-medium" activeClassName="text-fuchsia-800">
                    <i className="bi bi-heart"></i> Favourites
                </NavLink>
                <NavLink to="/Recently" className="font-medium" activeClassName="text-fuchsia-800">
                    Recently Visited
                </NavLink>
                <NavLink to="/Explore" className="font-medium" activeClassName="text-fuchsia-800">
                    <i className="bi bi-globe2"></i> Explore More
                </NavLink>
            </div>
            <div className="hidden md:flex space-x-10 mx-6 md:mx-32">
                <NavLink to="/Login" className="font-medium border-2 p-2 border-black rounded-2xl" activeClassName="border-fuchsia-800">
                    Login
                </NavLink>
                <NavLink to="/Usersign" className="font-medium border-2 text-white bg-fuchsia-800 p-2 rounded-2xl hover:bg-blue-600" activeClassName="bg-blue-600">
                    Signup
                </NavLink>
            </div>

            <div className="md:hidden flex items-center">
                <button onClick={toggleMenu} id="menu-btn" className="text-3xl">
                    <i className="bi bi-list"></i>
                </button>
            </div>

            {menuOpen && (
                <div id="menu" className="flex flex-col items-center bg-white shadow-xl absolute top-16 left-0 w-full md:hidden">
                    <NavLink to="/" exact className="py-2 font-medium" onClick={toggleMenu} activeClassName="text-fuchsia-800">
                        Home
                    </NavLink>
                    <NavLink to="/About" className="py-2 font-medium" onClick={toggleMenu} activeClassName="text-fuchsia-800">
                        <i className="bi bi-heart"></i> About Us
                    </NavLink>
                    <NavLink to="/Favourites" className="py-2 font-medium" onClick={toggleMenu} activeClassName="text-fuchsia-800">
                        <i className="bi bi-heart"></i> Favourites
                    </NavLink>
                    <NavLink to="/Recently" className="py-2 font-medium" onClick={toggleMenu} activeClassName="text-fuchsia-800">
                        Recently Visited
                    </NavLink>
                    <NavLink to="/Explore" className="py-2 font-medium" onClick={toggleMenu} activeClassName="text-fuchsia-800">
                        <i className="bi bi-globe2"></i> Explore More
                    </NavLink>
                    <NavLink to="/Login" className="py-2 font-medium border-2 p-2 border-black rounded-2xl" onClick={toggleMenu} activeClassName="border-fuchsia-800">
                        Login
                    </NavLink>
                    <NavLink to="/Usersign" className="py-2 font-medium border-2 text-white bg-fuchsia-800 p-2 rounded-2xl hover:bg-blue-600" onClick={toggleMenu} activeClassName="bg-blue-600">
                        Signup
                    </NavLink>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
