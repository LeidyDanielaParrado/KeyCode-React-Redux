import { Link, Outlet, useLocation } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import "./storeLayout.scss";

import imgFood from "../assets/img/Comida.svg";
import imgObject from "../assets/img/Objetos.svg";
import imgLocation from "../assets/img/Lugares.svg";

const StoreLayout = () => {
    const currentLocation = useLocation().pathname;

    return (
        <>
            <Header />
            <main className="store_layout">
                <section className="navStore-buttons">
                    <div>
                        <Link to="/store/foods" className={currentLocation === "/store/foods" ? "select" : ""}>
                            <img src={imgFood} alt="food" />
                            <p>Comida</p>
                        </Link>

                        <Link to="/store/objects" className={currentLocation === "/store/objects" ? "select" : ""}>
                            <img src={imgObject} alt="food" />
                            <p>Objetos</p>
                        </Link>

                        <Link to="/store/locations" className={currentLocation === "/store/locations" ? "select" : ""}>
                            <img src={imgLocation} alt="food" />
                            <p>Ubicaciones</p>
                        </Link>
                    </div>
                </section>

                <Outlet />

                <Link to="/store/shop" className="btn_shop">
                    <img src={imgLocation} alt="food" />
                    <p>Carrito de compra</p>
                </Link>
            </main>
            <Footer />
        </>
    );
};

export default StoreLayout;
