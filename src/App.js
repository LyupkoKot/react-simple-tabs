import React, { Component } from "react";
import "./App.css";
// components
import TabBar from "./components/tab/TabBar";
import TabView from "./components/tab/TabView";
// styles
import Wrapper from "./styled/app/AppStyled.js";
class App extends Component {
  state = {
    value: "FIRST"
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
