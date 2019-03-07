import React from "react";
import PropTypes from "prop-types";
const Snackbars = ({ text }) => {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
};
Snackbars.propTypes = {
  text: PropTypes.string.isRequired
};

export default Snackbars;
