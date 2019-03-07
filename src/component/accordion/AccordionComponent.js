import React from "react";
import PropTypes from "prop-types";
// components
import AccordionPanel from "component/accordion/AccordionPanel";
import AccordionButton from "component/accordion/AccordionButton";
// container
import WithAccordionComponent from "container/accordion/WithAccordionComponent";
// styles
import AccordionComponentStyle from "styled/accordion/AccordionComponentStyle";

const AccordionComponent = ({ title, content, isActive, handleClick }) => {
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

export default WithAccordionComponent(AccordionComponent);
