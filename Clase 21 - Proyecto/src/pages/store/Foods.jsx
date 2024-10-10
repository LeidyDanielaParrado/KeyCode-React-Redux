import { useContext } from "react";

import ListGenericProducts from "../../components/listGenericProducts/ListGenericProducts";
import { ListProductsContext } from "../../context/ListProductsContext";

const Foods = () => {
    const listProducts = useContext(ListProductsContext);
    return <ListGenericProducts listProducts={listProducts} filter="food" />;
};

export default Foods;
