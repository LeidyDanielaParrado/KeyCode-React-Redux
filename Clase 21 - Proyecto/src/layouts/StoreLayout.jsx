import { Link, Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import "./storeLayout.scss";

import imgFood from "../assets/img/Comida.svg";
import imgObject from "../assets/img/Objetos.svg";
import imgLocation from "../assets/img/Lugares.svg";

const StoreLayout = () => {
    return (
        <>
            <Header />
            <main className="store_layout">
                {/* <section className="navStore-buttons">
                    <div>
                        <Link to="/store/foods" className="select">
                            <img src={imgFood} alt="food" />
                            <p>Comida</p>
                        </Link>

                        <Link to="/store/objects">
                            <img src={imgObject} alt="food" />
                            <p>Objetos</p>
                        </Link>

                        <Link to="/store/locations">
                            <img src={imgLocation} alt="food" />
                            <p>Ubicaciones</p>
                        </Link>
                    </div>
                </section> */}

                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default StoreLayout;
