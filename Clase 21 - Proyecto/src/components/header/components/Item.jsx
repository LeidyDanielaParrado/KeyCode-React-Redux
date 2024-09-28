import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Item = ({ text, route }) => {
    return (
        <li>
            <Link to={route}>{text}</Link>
        </li>
    );
};

Item.propTypes = {
    text: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
};

export default Item;
