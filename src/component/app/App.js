import React from "react";
import "../../App.css";
// components
import TabBar from "component/tab/TabBar";
import TabView from "component/tab/TabView";
// containers
import Tab from "container/tab/TabRenderProps";
// styles
import Wrapper from "styled/app/AppStyled.js";
// constants
import {
  accordion,
  ENUM,
  tableContent,
  tableTitles
} from "constants/constants";

const App = () => {
  return (
    <Wrapper>
      <Tab ENUM={ENUM}>
        {({ value, setValue }) => (
          <div>
            <TabBar value={value} handleClick={setValue} />
            <TabView
              value={value}
              tableContent={tableContent}
              tableTitles={tableTitles}
              accordionContent={accordion}
            />
          </div>
        )}
      </Tab>
    </Wrapper>
  );
};

export default App;
