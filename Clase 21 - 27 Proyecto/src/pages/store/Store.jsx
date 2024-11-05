import { useContext } from "react";
import ListProducts from "../../components/listProducts/ListProducts";
import { ListProductsContext } from "../../context/ListProductsContext";

const Store = () => {
    const listProducts = useContext(ListProductsContext);
    return <ListProducts listProducts={listProducts} />;
};

export default Store;
