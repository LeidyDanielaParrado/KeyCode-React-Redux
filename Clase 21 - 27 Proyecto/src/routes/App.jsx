import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import General from "../layouts/General";
import StoreLayout from "../layouts/StoreLayout";

/* Páginas generales */
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

/* Páginas de la tienda */
import Store from "../pages/store/Store";
import Foods from "../pages/store/Foods";
import Location from "../pages/store/Location";
import Objects from "../pages/store/Objects";
import Shop from "../pages/shop/Shop";

/* Creación del contexto */
import { ListShopProductsContext } from "../context/LlistShopProductsContext.jsx";
import Detail from "../pages/store/Detail.jsx";

function App() {
    const [shopProducts, setShopProducts] = useState([]);

    return (
        <ListShopProductsContext.Provider value={{ shopProducts, setShopProducts }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<General />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                    </Route>

                    <Route path="/store" element={<StoreLayout />}>
                        <Route index element={<Store />} />
                        <Route path="foods" element={<Foods />} />
                        <Route path="locations" element={<Location />} />
                        <Route path="objects" element={<Objects />} />
                        <Route path="shop" element={<Shop />} />
                        {/* <Route path="detail/:id" element={<Detail />} /> */}
                        <Route path="detail" element={<Detail />} />
                    </Route>

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </ListShopProductsContext.Provider>
    );
}

export default App;
