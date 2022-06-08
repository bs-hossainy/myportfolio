import React from "react";
import { Link } from "react-router-dom"
function Navbar() {
    return (
        <div className="navbar">
            <div className="toggleButton">
                <button> Toggle Button for Mobile Users </button>
            </div>
            <div className="links">
                <Link to="/"> Home </Link>
                <Link to="/experience"> Experience </Link>
                <Link to="/projects"> Projects </Link>
            </div>
        </div>
    );
}

export default Navbar;