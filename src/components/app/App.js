import React, { Component } from "react";
import "../../App.css";
// components
import TabBar from "../../container/tab/TabBar";
import TabView from "../../container/tab/TabView";
// styles
import Wrapper from "../../styled/app/AppStyled.js";
// constants
import { ENUM } from "../../constants/constants";

class App extends Component {
  state = {
    value: ENUM.FIRST
  };
  handleClick = val => {
    this.setState({ value: val });
  };

  render() {
    return (
      <Wrapper>
        <TabBar handleClick={this.handleClick} value={this.state.value} />
        <TabView value={this.state.value} />
      </Wrapper>
    );
  }
}

export default App;
