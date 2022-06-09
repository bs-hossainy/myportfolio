import React, {useState} from "react";
import { Link } from "react-router-dom"

import "../cssStyles/Navbar.css"
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {

    // Clicking on the button should open the Navbar
    const [isNavbarExpanded, setNavbarExpanded] = useState(false);

    return (
        <div className="navbar" id={isNavbarExpanded ? "expand" : "close"}>

            <div className="toggleButton">
                <button onClick={
                    () => {
                        setNavbarExpanded((state) => !state);
                }}>
                    <ReorderIcon />
                </button>
            </div>

            <div className="links">
                <Link to="/"> HOME </Link>
                <Link to="/experience"> EXPERIENCE </Link>
                <Link to="/projects"> PROJECTS </Link>
                <Link to="/Blog"> BLOG </Link>
                <Link to="/Books"> FAV. BOOKS </Link>
            </div>

        </div>
    );
}

export default Navbar;