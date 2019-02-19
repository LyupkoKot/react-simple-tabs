import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

const AccordionPanelKeyFrames = keyframes`
  0% {
    padding: 0;
  }
  100% {
   padding: 8px 0 14px 0;
  } 
`;

const AccordionPanelStyle = styled.li`
  animation-name: ${AccordionPanelKeyFrames};
  animation-duration: 0.4s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: both;
  animation-play-state: running;
`;

export default AccordionPanelStyle;
