import PropTypes from 'prop-types';
import Header from "./Header";
import Footer from "./Footer";

const Templete = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

Templete.propTypes = {
    children: PropTypes.node.isRequired
};

export default Templete;