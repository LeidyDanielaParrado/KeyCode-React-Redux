import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importación de Layouts
import GlobalLayout from "../pages/layouts/GlobalLayout";

import NotFound from "../pages/NotFound";

// Importación de páginas publicas
import Home from "../pages/public/Home";
import Store from "../pages/public/Store";
import About from "../pages/public/About";

// Importación de CRUD de usuarios
import Login from "../pages/users/Login";
import UsersDashboard from "../pages/users/UsersDashboard";
import UsersEdit from "../pages/users/UsersEdit";
import Register from "../pages/users/Register";

// Importación de CRUD de productos
import ProductDashboard from "../pages/products/ProductDashboard";
import EditProduct from "../pages/products/ProductsEdit";
import Create from "../pages/products/Create";

function App() {
    const [user, setUser] = useState(false);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<GlobalLayout />}>
                    {/* path -> raíz de agrupación | Element -> Layout*/}
                    <Route index element={<Home />} /> {/* index -> la ruta raíz */}
                    <Route path="store" element={<Store />} />
                    <Route path="about" element={<About />} />
                </Route>

                <Route path="/user" element={<GlobalLayout />}>
                    <Route index element={<Login />} />
                    <Route path="dashboard" element={<UsersDashboard />} />
                    <Route path="edit" element={user ? <UsersEdit /> : <Home />} />
                    <Route path="register" element={<Register />} />
                </Route>

                <Route path="/product" element={<GlobalLayout />}>
                    <Route index element={<ProductDashboard />} />
                    <Route path="edit" element={<EditProduct />} />
                    <Route path="create" element={<Create />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
