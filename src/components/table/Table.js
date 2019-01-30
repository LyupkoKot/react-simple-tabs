import React from "react";
import PropTypes from "prop-types";
const Table = ({ text }) => {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
};
Table.propTypes = {
  text: PropTypes.string.isRequired
};

export default Table;
