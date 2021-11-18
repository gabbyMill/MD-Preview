import React, { Component } from "react";
import starter from "../mdStarter";
import Preview from "./Preview";
import Editor from "./Editor";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      content: starter,
    };
  }

  changeStateContent = content => {
    this.setState({ content });
  };

  render() {
    return (
      <div id="Main">
        <Editor text={this.changeStateContent} />
        <Preview content={this.state.content} />
      </div>
    );
  }
}

export default Main;
