import React from "react";
// containers
import AccordionContainer from "component/accordion/AccordionComponent";

const Accordion = ({ accordionContent }) => {
  return accordionContent.map(function(item, index) {
    return (
      <AccordionContainer
        key={index}
        title={item.title}
        content={item.content}
      />
    );
  });
};
export default Accordion;
