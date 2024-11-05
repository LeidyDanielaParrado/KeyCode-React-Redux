import PropTypes from "prop-types";
import { NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";

import Item from "./Item";

const Nav = ({ menuItems }) => (
    <>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
            {menuItems.map((item, index) => (
                <NavbarItem key={index}>
                    <Item item={item} />
                </NavbarItem>
            ))}
        </NavbarContent>

        <NavbarMenu>
            {menuItems.map((item, index) => (
                <NavbarMenuItem key={index}>
                    <Item item={item} />
                </NavbarMenuItem>
            ))}
        </NavbarMenu>
    </>
);

Nav.propTypes = {
    menuItems: PropTypes.array.isRequired,
};

export default Nav;
