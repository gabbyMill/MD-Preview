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
  changeContent = content => {
    this.setState({ content });
  };

  render() {
    return (
      <div id="Main">
        <Editor text={this.changeContent} />
        <Preview content={this.state.content} />
      </div>
    );
  }
}

export default Main;
