import React from "react";
import PropTypes from "prop-types";
// styles
import TabBarStyle from "styled/tab/TabBarStyle";
import TabItemStyle from "styled/tab/TabItemStyle";
// constants
import { tabs } from "constants/constants";

const TabBar = ({ handleClick, value }) => {
  return (
    <TabBarStyle>
      <ul>
        {tabs.map(function(item) {
          return (
            <TabItemStyle
              key={item.value}
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
TabBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};
export default TabBar;
