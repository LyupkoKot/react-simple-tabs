import React from "react";
import styled, { css } from "styled-components";
const TabItemStyle = styled.li`
  background-color: inherit;
  display: flex;
  border: none;
  border-bottom: ${({ isActive }) =>
    isActive ? `solid 2px  #FEF786` : "solid 2px rgb(136,162,70)"};
  padding: 14px 35px;
  cursor: pointer;
  transition: 0.3s;
  color: ${({ isActive }) => (isActive ? `white` : "#C6E284")};
  font: 16px "Droid Sans Mono";
`;

export default TabItemStyle;
