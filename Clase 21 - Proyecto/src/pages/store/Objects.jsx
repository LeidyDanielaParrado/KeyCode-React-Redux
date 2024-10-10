import { useContext } from "react";

import ListGenericProducts from "../../components/listGenericProducts/ListGenericProducts";
import { ListProductsContext } from "../../context/ListProductsContext";

const Objects = () => {
    const listProducts = useContext(ListProductsContext);
    return <ListGenericProducts listProducts={listProducts} filter="object" />;
};

export default Objects;
