import React, { Component } from "react";
import Preview from "./Preview";
import Editor from "./Editor";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "Example Text",
      text: "",
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
