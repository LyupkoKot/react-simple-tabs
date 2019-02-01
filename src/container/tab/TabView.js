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

const TabView = ({ value, tableContent, tableTitles }) => {
  return (
    <TabViewStyle>
      {value === ENUM.FIRST && (
        <Accordion text={"В п'ятницу п'ятого Ваня вышел с дома"} />
      )}
      {value === ENUM.SECOND && (
        <Table tableContent={tableContent} tableTitles={tableTitles} />
      )}
      {value === ENUM.THIRD && (
        <Snackbars text={"Мне не жаль тебя, не жаль эту зиму"} />
      )}
    </TabViewStyle>
  );
};

TabView.propTypes = {
  value: PropTypes.string.isRequired,
  tableContent: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
    .isRequired,
  tableTitles: PropTypes.arrayOf(PropTypes.string)
};

export default TabView;
