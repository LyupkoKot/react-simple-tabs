import React, { useState } from "react";
import PropTypes from "prop-types";
// components
import AccordionPanel from "../../container/accordion/AccordionPanel";
import AccordionButton from "../../container/accordion/AccordionButton";
// styles
import AccordionComponentStyle from "../../styled/accordion/AccordionComponentStyle";

const AccordionComponent = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    isActive ? setIsActive(false) : setIsActive(true);
  };
  return (
    <AccordionComponentStyle isActive={isActive}>
      <AccordionButton title={title} handleCLick={handleClick} />
      {isActive && <AccordionPanel content={content} />}
    </AccordionComponentStyle>
  );
};
AccordionComponent.propTypes = {
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default AccordionComponent;
