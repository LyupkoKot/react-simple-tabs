import React, { useState } from "react";

function WithAccordionComponent(WrappedComponent) {
  return props => {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
      isActive ? setIsActive(false) : setIsActive(true);
    };
    return (
      <WrappedComponent
        isActive={isActive}
        handleClick={handleClick}
        {...props}
      />
    );
  };
}
export default WithAccordionComponent;
