import { useContext } from "react";

import ListProducts from "../../components/listProducts/ListProducts";
import { ListProductsContext } from "../../context/ListProductsContext";

const Foods = () => {
    const listProducts = useContext(ListProductsContext);
    return <ListProducts listProducts={listProducts} filter="food" />;
};

export default Foods;
