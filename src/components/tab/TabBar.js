import React, { Component } from "react";
import TabBarStyle from "/Users/halynabochnak/Desktop/ReactStart/simple-tabs/src/styled/tab/TabBarStyle";
import { ENUM, tabs } from "../../constants/constants";
import TabItemStyle from "../../styled/tab/TabItemStyle";

const TabBar = ({ handleClick, value }) => {
  /*function handleCLick(val) {
        /!*
        <TabView />
         *!/
    }*/
  const myTabs = tabs.map(function(item, index) {
    console.log(item.value === value);
    return (
      <TabItemStyle
        key={index}
        onClick={() => handleClick(item.value)}
        isActive={item.value === value}
      >
        {item.title}
      </TabItemStyle>
    );
  });
  return (
    <TabBarStyle>
      <ul>{myTabs}</ul>
    </TabBarStyle>
  );
};
export default TabBar;
