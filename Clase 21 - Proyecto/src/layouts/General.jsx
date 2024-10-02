import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";

const General = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

General.propTypes = {};

export default General;
