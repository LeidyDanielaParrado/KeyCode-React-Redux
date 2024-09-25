import ItemNav from "./ItemNav";

import "./nav.css";

const Nav = () => {
    return (
        <nav className="nav">
            <ul>
                <ItemNav route="/" text="Home" />
                <ItemNav route="/about" text="About" />
            </ul>
        </nav>
    );
};

export default Nav;
