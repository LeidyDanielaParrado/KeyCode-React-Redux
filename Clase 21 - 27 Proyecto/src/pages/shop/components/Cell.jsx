import { useCallback, useContext } from "react";
import PropTypes from "prop-types";

import { User, Chip, Tooltip } from "@nextui-org/react";
import { ListShopProductsContext } from "../../../context/LlistShopProductsContext.jsx";

import { formatPrice } from "../../../utils/formatPrice";

const categoryColorMap = {
    object: "success",
    food: "danger",
    location: "warning",
};

const Cell = ({ item, columnKey }) => {
    const { setShopProducts } = useContext(ListShopProductsContext);

    const addQuantity = (id) => {
        setShopProducts((prevProducts) => {
            const itemExists = prevProducts.findIndex((product) => product.id === id);
            const upDateCart = [...prevProducts];
            upDateCart[itemExists].quantity++;
            return upDateCart;
        });
    };

    const removeQuantity = (id) => {
        setShopProducts((prevProducts) => {
            const itemExists = prevProducts.findIndex((product) => product.id === id);
            const upDateCart = [...prevProducts];

            if (upDateCart[itemExists].quantity > 1) {
                upDateCart[itemExists].quantity--;
            }

            return upDateCart;
        });
    };

    const deleteProduct = (id) => {
        setShopProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
    };

    const renderCell = useCallback((product, columnKey) => {
        const cellValue = product[columnKey];

        switch (columnKey) {
            case "title":
                const img = new URL(`../../../assets/${product.category}/${product.img}`, import.meta.url).href;

                return (
                    <User
                        avatarProps={{ radius: "lg", src: img }}
                        name={product.title}
                        description={product.description}
                    />
                );
            case "category":
                return (
                    <Chip className="capitalize" color={categoryColorMap[product.category]} size="sm" variant="flat">
                        {product.category}
                    </Chip>
                );
            case "price":
                return (
                    <div className="flex flex-col">
                        <p className="text-bold text-sm capitalize">{formatPrice(product.quantity * product.price)}</p>
                    </div>
                );
            case "quantity":
                return (
                    <div className="flex flex-col">
                        <p className="text-bold text-sm capitalize">{product.quantity}</p>
                    </div>
                );
            case "actions":
                return (
                    <div className="relative flex items-center gap-2">
                        <Tooltip content="Disminuir">
                            <span
                                className="text-lg text-default-400 cursor-pointer active:opacity-50"
                                onClick={() => removeQuantity(product.id)}
                            >
                                <ion-icon name="remove-circle"></ion-icon>
                            </span>
                        </Tooltip>

                        <Tooltip content="Agregar">
                            <span
                                className="text-lg text-default-400 cursor-pointer active:opacity-50"
                                onClick={() => addQuantity(product.id)}
                            >
                                <ion-icon name="add-circle"></ion-icon>
                            </span>
                        </Tooltip>

                        <Tooltip color="danger" content="Eliminar">
                            <span
                                className="text-lg text-danger cursor-pointer active:opacity-50"
                                onClick={() => deleteProduct(product.id)}
                            >
                                <ion-icon name="trash"></ion-icon>
                            </span>
                        </Tooltip>
                    </div>
                );
            default:
                return cellValue;
        }
    }, []);

    return <>{renderCell(item, columnKey)}</>;
};

Cell.propTypes = {
    item: PropTypes.object.isRequired,
    columnKey: PropTypes.string.isRequired,
};

export default Cell;
