import React from "react";
import PropTypes from "prop-types";
// components
import Accordion from "../accordion/Accordion";
import Table from "../table/Table";
import Snackbars from "../snackbars/Snackbars";
// styles
import TabViewStyle from "../../styled/tab/TabViewStyle";
// constants
import { ENUM } from "../../constants/constants";

const TabView = ({ value }) => {
  return (
    <TabViewStyle>
      {value === ENUM.FIRST && (
        <Accordion text={"В п'ятницу п'ятого Ваня вышел с дома"} />
      )}
      {value === ENUM.SECOND && <Table />}
      {value === ENUM.THIRD && (
        <Snackbars text={"Мне не жаль тебя, не жаль эту зиму"} />
      )}
    </TabViewStyle>
  );
};

TabView.propTypes = {
  value: PropTypes.string.isRequired
};

export default TabView;
