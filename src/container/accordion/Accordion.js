import React from "react";
import PropTypes from "prop-types";
const Accordion = ({ text }) => {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
};
Accordion.propTypes = {
  text: PropTypes.string.isRequired
};
export default Accordion;
