import PropTypes from "prop-types";
import Item from "./Item";

const Nav = ({ arrayRoutes }) => {
    return (
        <nav className="nav">
            <ul>{arrayRoutes.map((route, index) => <Item key={} route="/" text="Home" />)}</ul>
        </nav>
    );
};

Nav.propTypes = {
    arrayRoutes: PropTypes.array.isRequired,
};

export default Nav;
