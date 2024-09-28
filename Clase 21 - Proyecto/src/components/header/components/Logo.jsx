import PropTypes from "prop-types";

const Logo = ({ children, img }) => {
    return (
        <figure className="logo">
            <img src={img} alt="Logo de zombie store" />

            <figcaption>{children}</figcaption>
        </figure>
    );
};

Logo.propTypes = {
    children: PropTypes.node,
    img: PropTypes.string.isRequired,
};

export default Logo;
