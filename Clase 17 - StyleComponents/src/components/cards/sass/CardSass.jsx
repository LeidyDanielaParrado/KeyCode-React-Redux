import Btn from "../../Btn";
import "./cardSass.scss";

const CardSass = () => {
    return (
        <article className="card">
            <h2>Card Sass</h2>
            <div>
                <figure>
                    <img src="https://storage.googleapis.com/pod_public/1300/151089.jpg" alt="Animals" />
                </figure>

                <h3>Animals</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptates.</p>
                
                <Btn color="ÿellow" />
            </div>
        </article>
    );
};

export default CardSass;
