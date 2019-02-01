import React from "react";
// components
import TableHeader from "./TableHeader";
// style
import TableStyle from "../../styled/table/TableStyle";
import TableContent from "./TableContent";
const Table = () => {

  return (
    <TableStyle>
      {/*<TableHeader/>*/}
      <TableContent/>
    </TableStyle>
  );
};


export default Table;
