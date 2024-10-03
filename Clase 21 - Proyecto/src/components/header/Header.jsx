import { useState } from "react";
import { Navbar } from "@nextui-org/react";

import "./header.scss";

import imgLogo from "../../assets/icons/Logo.svg";
import Logo from "./components/Logo";
import Nav from "./components/Nav";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { uid: "/", name: "Inicio" },
        { uid: "/store", name: "Tienda" },
        { uid: "/about", name: "Información" },
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className="header" style={{ backgroundColor: "black" }}>
            <Logo isMenuOpen={isMenuOpen} img={imgLogo}>
                Zombie <span>Store</span>
            </Logo>

            <Nav menuItems={menuItems} />
        </Navbar>
    );
};

export default Header;
