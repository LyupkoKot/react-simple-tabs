import React, { Component } from "react";
import styled, { css } from "styled-components";

const AccordionComponentStyle = styled.ul`
  transition: ${({ isActive }) => (isActive ? "0.4s ease" : "0.4s ease")};
  list-style-type: none;
  padding: 0 24px;
  margin: ${({ isActive }) => (isActive ? "15px 0" : "0 0")};
  background-color: #eeeeee;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  li {
    padding: 14px 0;
  }
  &:first-child {
    margin: 0;
    margin-bottom: ${({ isActive }) => (isActive ? "15px" : "0")};
  }
  &:last-child {
    margin: 0;
    margin-top: ${({ isActive }) => (isActive ? "15px" : "0")};
  }
`;

export default AccordionComponentStyle;
