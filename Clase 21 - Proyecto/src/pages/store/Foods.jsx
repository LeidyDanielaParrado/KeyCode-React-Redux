import { useContext } from "react";
import PropTypes from "prop-types";

import { ListProductsContext } from "../../context/ListProductsContext";

const Foods = () => {
    const listProducts = useContext(ListProductsContext);
    console.log(listProducts);

    return <div>Hola soy un nuevo componente</div>;
};

Foods.propTypes = {};

export default Foods;
