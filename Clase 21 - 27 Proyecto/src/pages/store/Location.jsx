import { useContext } from "react";

import ListProducts from "../../components/listProducts/ListProducts";
import { ListProductsContext } from "../../context/ListProductsContext";

const Location = () => {
    const listProducts = useContext(ListProductsContext);
    return <ListProducts listProducts={listProducts} filter="location" />;
};

export default Location;
