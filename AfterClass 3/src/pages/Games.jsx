import General from "../components/layouts/General";
import PropTypes from "prop-types";

const Games = ({ setRoute }) => {
    return (
        <General setRoute={setRoute}>
            <div>
                <h1>Games</h1>

                <section>
                    <div className="card">
                        <h2>Game 1</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies, nunc id aliquam
                            ultricies, justo sapien luctus justo, nec ultricies nunc metus a libero. Donec nec tortor in
                            justo ornare fermentum. Sed in purus nec purus ultricies ultricies. Nullam condimentum,
                            justo nec ultricies ultricies, justo erat ultricies turpis, nec ultricies nunc metus a
                            libero. Donec nec tortor in justo ornare fermentum. Sed in purus nec purus ultricies
                            ultricies. Nullam condimentum, justo nec ultricies ultricies, justo erat ultricies turpis.
                        </p>
                    </div>

                    <div className="card">
                        <h2>Game 1</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies, nunc id aliquam
                            ultricies, justo sapien luctus justo, nec ultricies nunc metus a libero. Donec nec tortor in
                            justo ornare fermentum. Sed in purus nec purus ultricies ultricies. Nullam condimentum,
                            justo nec ultricies ultricies, justo erat ultricies turpis, nec ultricies nunc metus a
                            libero. Donec nec tortor in justo ornare fermentum. Sed in purus nec purus ultricies
                            ultricies. Nullam condimentum, justo nec ultricies ultricies, justo erat ultricies turpis.
                        </p>
                    </div>

                    <div className="card">
                        <h2>Game 1</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies, nunc id aliquam
                            ultricies, justo sapien luctus justo, nec ultricies nunc metus a libero. Donec nec tortor in
                            justo ornare fermentum. Sed in purus nec purus ultricies ultricies. Nullam condimentum,
                            justo nec ultricies ultricies, justo erat ultricies turpis, nec ultricies nunc metus a
                            libero. Donec nec tortor in justo ornare fermentum. Sed in purus nec purus ultricies
                            ultricies. Nullam condimentum, justo nec ultricies ultricies, justo erat ultricies turpis.
                        </p>
                    </div>
                </section>
            </div>
        </General>
    );
};

Games.propTypes = {
    setRoute: PropTypes.func,
};

export default Games;
