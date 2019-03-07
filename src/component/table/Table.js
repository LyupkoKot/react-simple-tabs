import React from "react";
// style
import TableStyle from "styled/table/TableStyle";
import TableContentStyle from "styled/table/TableContentStyle";
import TableHeaderStyle from "styled/table/TableHeaderStyle";

const Table = ({ tableContent, tableTitles }) => {
  const titles = tableTitles.map(function(item, index) {
    return <TableHeaderStyle key={index}>{item}</TableHeaderStyle>;
  });

  const content = tableContent.map(function(item) {
    return Object.keys(item).map(function(key) {
      return <TableContentStyle key={key}>{item[key]}</TableContentStyle>;
    });
  });
  return (
    <TableStyle tableContent={tableContent} tableTitles={tableTitles}>
      {titles}
      {content}
    </TableStyle>
  );
};

export default Table;
