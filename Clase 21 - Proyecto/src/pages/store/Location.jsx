import { useContext } from "react";

import ListGenericProducts from "../../components/listGenericProducts/ListGenericProducts";
import { ListProductsContext } from "../../context/ListProductsContext";

const Location = () => {
    const listProducts = useContext(ListProductsContext);
    return <ListGenericProducts listProducts={listProducts} filter="location" />;
};

export default Location;
