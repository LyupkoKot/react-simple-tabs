import React, { useState } from "react";

const Tab = ({ ENUM, children }) => {
  const [value, setValue] = useState(ENUM.FIRST);
  return children({ value: value, setValue: setValue });
};

export default Tab;
