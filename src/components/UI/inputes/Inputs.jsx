import PropTypes from "prop-types";

const Inputs = (props) => {
  return (
    <div className="input-container">
      <label htmlFor={props.id || ""}>{props.label || ""}</label>
      <input {...props} />
      <div className={props.errorMessage ? "input-error" : "d-none"}>
        {props.errorMessage || "Invalid"}
      </div>
    </div>
  );
};

Inputs.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  errorMessage: PropTypes.string,
};

export default Inputs;
