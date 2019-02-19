import React from "react";

const AccordionButton = ({ handleCLick, title }) => {
  return <li onClick={handleCLick}>{title}</li>;
};

export default AccordionButton;
