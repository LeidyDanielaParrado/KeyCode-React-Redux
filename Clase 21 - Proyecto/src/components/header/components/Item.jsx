import React from "react";
import PropTypes from "prop-types";

import { Link, useLocation } from "react-router-dom";
import { Button } from "@nextui-org/react";

import "./item.scss";

const Item = ({ item }) => {
    const location = useLocation().pathname;

    return (
        <Link to={item.uid} className={location === item.uid ? "route_select" : ""}>
            {item.name}
            {/*  <Button color="primary" variant="flat">
                {item.name}
            </Button> */}
        </Link>
    );
};

Item.propTypes = {
    item: PropTypes.object.isRequired,
};

export default Item;
