import React from "react";
import PropTypes from "prop-types";

export const TabComponent = ({ tabBar, tabView }) => (
  <div>
    {tabBar}
    {tabView}
  </div>
);
TabComponent.propTypes = {
  tabBar: PropTypes.element.isRequired,
  tabView: PropTypes.element.isRequired
};
export default TabComponent;
