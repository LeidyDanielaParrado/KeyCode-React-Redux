import { useContext } from "react";

import ListProducts from "../../components/listProducts/ListProducts";
import { ListProductsContext } from "../../context/ListProductsContext";

const Objects = () => {
    const listProducts = useContext(ListProductsContext);
    return <ListProducts listProducts={listProducts} filter="object" />;
};

export default Objects;
