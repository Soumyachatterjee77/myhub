import PropTypes from "prop-types";

const PrimaryButton = (props) => {
  return (
    <button type="submit" className="primary-button">
      {props.btnName}
    </button>
  );
};

PrimaryButton.propTypes = {
  btnName: PropTypes.string,
};

export default PrimaryButton;
