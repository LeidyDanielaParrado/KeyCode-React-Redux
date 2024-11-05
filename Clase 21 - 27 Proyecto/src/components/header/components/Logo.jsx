import PropTypes from "prop-types";
import { NavbarBrand, NavbarContent, NavbarMenuToggle } from "@nextui-org/react";

import "./logo.scss";

const Logo = ({ children, isMenuOpen, img }) => {
    return (
        <NavbarContent>
            <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden" />

            <NavbarBrand>
                <figure className="logo">
                    <img src={img} alt="Logo de zombie store" />

                    <figcaption>{children}</figcaption>
                </figure>
            </NavbarBrand>
        </NavbarContent>
    );
};

Logo.propTypes = {
    children: PropTypes.node,
    isMenuOpen: PropTypes.bool.isRequired,
    img: PropTypes.string.isRequired,
};

export default Logo;
