import Btn from "../../Btn";
import "./cardTradicional.css";

const CardTradicional = () => {
    return (
        <article className="card">
            <h2>Card Tradicional</h2>
            <div>
                <figure>
                    <img
                        src="https://img.freepik.com/vector-gratis/personaje-dibujos-animados-gatito-ojos-dulces_1308-135596.jpg"
                        alt="Animals"
                    />
                </figure>

                <h3>Animals</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptates.</p>

                <Btn color="black" />
            </div>
        </article>
    );
};

export default CardTradicional;
