import { Link, Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const StoreLayout = () => {
    return (
        <>
            <Header />
            <main>
                <section className="navStore-buttons">
                    <Link to="/store/foods">
                        <img src="https://via.placeholder.com/150" alt="food" />
                        <p>Comida</p>
                    </Link>

                    <Link to="/store/objects">
                        <img src="https://via.placeholder.com/150" alt="food" />
                        <p>Objetos</p>
                    </Link>

                    <Link to="/store/locations">
                        <img src="https://via.placeholder.com/150" alt="food" />
                        <p>Ubicaciones</p>
                    </Link>
                </section>

                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default StoreLayout;
