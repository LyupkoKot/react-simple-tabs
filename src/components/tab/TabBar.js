import React, { Component } from "react";
// styles
import TabBarStyle from "/Users/halynabochnak/Desktop/ReactStart/simple-tabs/src/styled/tab/TabBarStyle";
import TabItemStyle from "../../styled/tab/TabItemStyle";
// constants
import { ENUM, tabs } from "../../constants/constants";

const TabBar = ({ handleClick, value }) => {
  return (
    <TabBarStyle>
      <ul>
        {tabs.map(function(item, index) {
          return (
            <TabItemStyle
              key={index}
              onClick={() => handleClick(item.value)}
              isActive={item.value === value}
            >
              {item.title}
            </TabItemStyle>
          );
        })}
      </ul>
    </TabBarStyle>
  );
};
export default TabBar;
