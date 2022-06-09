import React from "react";
import { Link } from "react-router-dom"

import "../cssStyles/Navbar.css"
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
    return (
        <div className="navbar">
            <div className="toggleButton">
                <button> <ReorderIcon /> </button>
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