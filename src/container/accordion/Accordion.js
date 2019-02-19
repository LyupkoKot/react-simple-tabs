import React from "react";
// component
import AccordionComponent from "../../components/accordion/AccordionComponent";

const Accordion = ({ accordionContent }) => {
  return accordionContent.map(function(item, index) {
    return (
      <AccordionComponent
        key={index}
        title={item.title}
        content={item.content}
      />
    );
  });
};
export default Accordion;
