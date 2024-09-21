import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ setRoute }) => {
    const routes = ["home", "games", "about"];

    return (
        <header>
            <nav>
                {routes.map((route, index) => {
                    return <Button key={index} text={route} setRoute={setRoute} />;
                })}
            </nav>
        </header>
    );
};

Header.propTypes = {
    setRoute: PropTypes.func,
};

export default Header;
