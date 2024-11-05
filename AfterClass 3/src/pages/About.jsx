import General from "../components/layouts/General";
import PropTypes from "prop-types";

const About = ({ setRoute }) => {
    return (
        <General setRoute={setRoute}>
            <div>
                <h1>About</h1>

                <section>
                    <h2>Our Story</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies, nunc id aliquam
                        ultricies, justo sapien luctus justo, nec ultricies nunc metus a libero. Donec nec tortor in
                        justo ornare fermentum. Sed in purus nec purus ultricies ultricies. Nullam condimentum, justo
                        nec ultricies ultricies, justo erat ultricies turpis, nec ultricies nunc metus a libero. Donec
                        nec tortor in justo ornare fermentum. Sed in purus nec purus ultricies ultricies. Nullam
                        condimentum, justo nec ultricies ultricies, justo erat ultricies turpis.
                    </p>
                </section>
            </div>
        </General>
    );
};

About.propTypes = {
    setRoute: PropTypes.func,
};

export default About;
