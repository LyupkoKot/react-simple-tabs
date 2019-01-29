import React, { Component } from "react";
import "./App.css";
import TabBarStyle from "./styled/tab/TabBarStyle";
import Wrapper from "/Users/halynabochnak/Desktop/ReactStart/simple-tabs/src/styled/app/AppStyled.js";
import TabBar from "./components/tab/TabBar";
import TabView from "./components/tab/TabView";
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
