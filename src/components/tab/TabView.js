import React from "react";
import Accordion from "../accordion/Accordion";
import Table from "../table/Table";
import Snackbars from "../snackbars/Snackbars";
import { ENUM } from "../../constants/constants";
import TabViewStyle from "../../styled/tab/TabViewStyle";

const TabView = ({ value }) => {
  console.log(value);

  return (
    <TabViewStyle>
      {value === ENUM.FIRST && (
        <Accordion text={"В п'ятницу п'того Ваня вышел с дома"} />
      )}
      {value === ENUM.SECOND && <Table text={"Welcome to the jungle"} />}
      {value === ENUM.THIRD && (
        <Snackbars text={"Мне не жаль тебя, не жаль эту зиму"} />
      )}
    </TabViewStyle>
  );
};

export default TabView;
