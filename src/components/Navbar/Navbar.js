import React from "react";
import Styles from "./Navbar.css";
import navBrand from "../images/navbar-brand.png";

function Navbar() {
    return (
        <header>
            <nav>
                <img src={navBrand} />
            </nav>
        </header>
    );
}

export default Navbar;
