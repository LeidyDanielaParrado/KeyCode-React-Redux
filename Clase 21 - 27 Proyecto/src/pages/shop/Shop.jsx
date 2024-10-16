import { useContext } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

import { ListShopProductsContext } from "../../context/LlistShopProductsContext.jsx";
import Cell from "./components/Cell.jsx";

import { formatPrice } from "../../utils/formatPrice.js";
import Modal from "../../components/modal/Modal.jsx";

const Shop = () => {
    const { shopProducts } = useContext(ListShopProductsContext);
    const columns = [
        { name: "NOMBRE", uid: "title" },
        { name: "CATEGORÍA", uid: "category" },
        { name: "PRECIO", uid: "price" },
        { name: "CANTIDAD", uid: "quantity" },
        { name: "ACCIONES", uid: "actions" },
    ];

    const total = shopProducts.reduce((count, product) => count + product.price * product.quantity, 0);
    const totalProducts = shopProducts.reduce((count, product) => count + product.quantity, 0);

    return (
        <div>
            <Table aria-label="Example table with custom cells">
                <TableHeader>
                    {columns.map((column) => (
                        <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                            {column.name}
                        </TableColumn>
                    ))}
                </TableHeader>
                <TableBody items={shopProducts}>
                    {(item) => (
                        <TableRow key={`${item.id}-${item.title}`}>
                            {(columnKey) => (
                                <TableCell>
                                    <Cell item={item} columnKey={columnKey} />
                                </TableCell>
                            )}
                        </TableRow>
                    )}
                </TableBody>
            </Table>

            <div>
                <h2>Detalle de la compra</h2>

                <div>
                    <strong>Productos totales:</strong>
                    <span>{totalProducts}</span>
                </div>

                <div>
                    <strong>Precio Total:</strong>
                    <span>{formatPrice(total)}</span>
                </div>

                <div>
                    <Modal btn_text="Comprar" modal_title="Compra con éxito!">
                        <p>
                            ¡Gracias por tu compra! <br />
                            En breve recibirás un correo con los detalles de tu compra.
                        </p>
                        <hr />
                        <div>
                            <strong>Productos totales:</strong>
                            <span>{totalProducts}</span>
                        </div>

                        <div>
                            <strong>Precio Total:</strong>
                            <span>{formatPrice(total)}</span>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default Shop;
