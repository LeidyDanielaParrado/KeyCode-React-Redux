import { useContext } from "react";
import PropTypes from "prop-types";

import { InputsContext } from "../context/InputsContext";

const InputContext = ({ id }) => {
    const { listInputs } = useContext(InputsContext);
    const input = listInputs.find((input) => input.id === id);

    const handleInputChange = (event) => {
        input.setState(event.target.value);
    };

    return (
        <label>
            {input.text}:
            <input onChange={handleInputChange} type={input.type} name={input.name} />
        </label>
    );
};

InputContext.propTypes = {
    id: PropTypes.number.isRequired,
};

export default InputContext;
