import { useContext, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";

import { Image, Button } from "@nextui-org/react";

import { formatPrice } from "../../utils/formatPrice";

import { ListProductsContext } from "../../context/ListProductsContext";
import { ListShopProductsContext } from "../../context/LlistShopProductsContext";

const Detail = () => {
    const listProducts = useContext(ListProductsContext);
    const { shopProducts, setShopProducts } = useContext(ListShopProductsContext);
    const location = useLocation();
    const navigate = useNavigate();
    /* const { id } = useParams(); */
    const { id } = queryString.parse(location.search);

    const product = listProducts.find((product) => product.id === parseInt(id));
    const img = new URL(`../../assets/${product.category}/${product.img}`, import.meta.url).href;

    const handleRedirection = () => {
        navigate("/404");
    };

    const addShop = (id) => {
        const itemExists = shopProducts.findIndex((product) => product.id === id);
        if (itemExists >= 0) {
            //Existe en el carrito
            const upDateCart = [...shopProducts];
            upDateCart[itemExists].quantity++;
            setShopProducts(upDateCart);
        } else {
            //No existe
            product.quantity = 1;
            setShopProducts([...shopProducts, product]);
        }
    };

    useEffect(() => {
        if (!listProducts || !product) {
            handleRedirection();
        }
    }, [listProducts, product]);

    return (
        <>
            <h1>{product.title}</h1>
            <section>
                <Image isBlurred width={240} src={img} alt={product.title} className="m-5" />
            </section>
            <section>
                <p>{product.description}</p>
                <p>{formatPrice(product.price)}</p>

                <Button color="primary" onPress={() => addShop(product.id)}>
                    Button
                </Button>
            </section>
        </>
    );
};

export default Detail;
