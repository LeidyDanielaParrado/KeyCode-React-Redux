import React from "react";
import PropTypes from "prop-types";

import logo from "../../assets/icons/Logo.svg";
import Logo from "./components/Logo";
import Nav from "./components/Nav";

const Header = () => {

    const arrayRoutes = ["Home", "Store", "About"];

    return (
        <header className="header">
            <Logo img={logo}>
                Zombie <spam>Store</spam>
            </Logo>

            <Nav arrayRoutes={arrayRoutes} />

            <nav className="nav">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/store">Store</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

Header.propTypes = {};

export default Header;
