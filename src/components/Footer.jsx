import React from "react";

import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import "../cssStyles/Footer.css";

function Footer () {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    return (
        <div id="footer">
            <div id="socialMedia">
                <LinkedInIcon />
                <FacebookIcon />
            </div>
            <p> &copy; {currentYear} Bismillah Hossainy</p>
        </div>
    );
}

export default Footer;