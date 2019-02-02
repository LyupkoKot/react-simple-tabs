import React from "react";
import styled, { css } from "styled-components";

const TableStyle = styled.ul`
  display: grid;
  grid-template-columns: repeat(
    ${props => props.tableTitles.length},
    minmax(max-content, 1fr)
  );
  grid-template-rows: none;
  list-style-type: none;
  margin: 0;
  padding: 0;
  background-color: #fafafa;
  border-radius: 0 0 5px 5px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  li {
    list-style-type: none;
    padding: 15px 56px 15px 24px;
    border-bottom: 1px solid rgba(224, 224, 224, 1);
    text-align: right;
  }
  li:nth-child(${props => props.tableContent.length}n+1) {
    text-align: left;
  }
  @media screen and (max-width: 730px) {
    li {
      padding: 15px 15px 15px 15px;
    }
  }
  @media screen and (max-width: 500px) {
    li {
      padding: 15px 5px 15px 5px;
    }
  }
`;
export default TableStyle;
