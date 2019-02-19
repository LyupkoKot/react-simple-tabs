import React, { useState } from "react";
import "../../App.css";
// components
import TabComponent from "../tab/TabComponent";
// containers
import TabBar from "../../container/tab/TabBar";
import TabView from "../../container/tab/TabView";
// styles
import Wrapper from "../../styled/app/AppStyled.js";
// constants
import {
  accordion,
  ENUM,
  tableContent,
  tableTitles
} from "../../constants/constants";

const App = () => {
  const [value, setValue] = useState(ENUM.FIRST);
  const handleClick = val => {
    setValue(val);
  };

  return (
    <Wrapper>
      <TabComponent
        tabBar={<TabBar value={value} handleClick={handleClick} />}
        tabView={
          <TabView
            value={value}
            tableContent={tableContent}
            tableTitles={tableTitles}
            accordionContent={accordion}
          />
        }
      />
    </Wrapper>
  );
};

export default App;
