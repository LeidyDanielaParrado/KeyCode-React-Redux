import "./home.scss";

import { Link } from "react-router-dom";

import img from "../assets/icons/Logo.svg";
import bg from "../assets/img/fondoHome.jpg";

const Home = () => {
    return (
        <>
            <section className="container-bg" style={{ backgroundImage: `url(${bg})` }}>
                <article className="container-text">
                    <h1>¡Bienvenido a Zombie Store!</h1>

                    <figure className="logo">
                        <img src={img} alt="Logo de zombie store" />

                        <figcaption>
                            Zombie <span>Store</span>
                        </figcaption>
                    </figure>

                    <p>
                        En Zombie Store encontrarás todo lo que necesitas para sobrevivir a un apocalipsis zombie. Desde
                        armas y municiones, hasta alimentos enlatados y medicamentos. ¡No esperes más y visita nuestra
                        tienda!
                    </p>

                    <Link to="/store">¡Quiero comprar!</Link>
                </article>
            </section>
        </>
    );
};

export default Home;
