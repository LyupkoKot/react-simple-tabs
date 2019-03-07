import React from "react";
import PropTypes from "prop-types";
// components
import Accordion from "component/accordion/Accordion";
import Table from "component/table/Table";
import Snackbars from "component/snackbars/Snackbars";
// styles
import TabViewStyle from "styled/tab/TabViewStyle";
// constants
import { ENUM } from "constants/constants";

const TabView = ({ value, tableContent, tableTitles, accordionContent }) => {
  return (
    <TabViewStyle>
      {value === ENUM.FIRST && (
        <Accordion accordionContent={accordionContent} />
      )}
      {value === ENUM.SECOND && (
        <Table tableContent={tableContent} tableTitles={tableTitles} />
      )}
      {value === ENUM.THIRD && (
        <Snackbars
          text={
            "Lorem ipsum — класичний варіант умовного беззмістовного тексту"
          }
        />
      )}
    </TabViewStyle>
  );
};

TabView.propTypes = {
  value: PropTypes.string.isRequired,
  tableContent: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
    .isRequired,
  tableTitles: PropTypes.arrayOf(PropTypes.string),
  accordionContent: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
    .isRequired
};

export default TabView;
