import PropTypes from "prop-types";

const InputForm = ({ handler, input }) => {
  return (
    <input onChange={handler} type={input.type} name={input.name} value={input.value} placeholder={input.placeholder} />
  );
};

InputForm.propTypes = {
  handler: PropTypes.func.isRequired,
  input: PropTypes.object.isRequired,
};

export default InputForm;
