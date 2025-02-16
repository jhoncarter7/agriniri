import PropTypes from "prop-types";

const InputLabel = ({ type, name }) => {
  return (
    <div className="flex flex-col">
      <label>{name}</label>
      <input
        type={type}
        name={name}
        className="border border-gray-500 h-10 focus"
      />
    </div>
  );
};

InputLabel.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default InputLabel;
