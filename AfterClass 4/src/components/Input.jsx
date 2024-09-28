import PropTypes from "prop-types";

const Input = ({ text, setState, type, name }) => {
    const handleInputChange = (event) => {
        setState(event.target.value);
    };

    return (
        <label>
            {text}:
            <input onChange={handleInputChange} type={type} name={name} />
        </label>
    );
};

Input.propTypes = {
    text: PropTypes.string.isRequired,
    setState: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default Input;
