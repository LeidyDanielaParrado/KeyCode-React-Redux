import CardSass from "./cards/sass/CardSass";
import CardStyledComponent from "./cards/styleComponent/CardStyledComponent";
import CardTradicional from "./cards/tradicional/CardTradicional";

const Container = () => {
    return (
        <section className="container">
            <CardTradicional />

            <CardSass />

            <CardStyledComponent />
        </section>
    );
};

export default Container;
