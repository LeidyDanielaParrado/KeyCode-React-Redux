import PropTypes from "prop-types";
import Header from "../Header";

const General = ({ children, setRoute }) => {
    return (
        <>
            <Header setRoute={setRoute} />
            {children}
        </>
    );
};

General.propTypes = {
    setRoute: PropTypes.func,
    children: PropTypes.node,
};

export default General;
