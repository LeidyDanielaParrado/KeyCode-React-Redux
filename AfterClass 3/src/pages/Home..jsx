import General from "../components/layouts/General";
import PropTypes from "prop-types";

const Home = ({ setRoute }) => {
    return (
        <General setRoute={setRoute}>
            <div>
                <h1>Home</h1>
            </div>
        </General>
    );
};

Home.propTypes = {
    setRoute: PropTypes.func,
};

export default Home;
