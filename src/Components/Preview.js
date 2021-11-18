import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

class Preview extends Component {
  render() {
    return <ReactMarkdown id="Preview">{this.props.content}</ReactMarkdown>;
  }
}

export default Preview;
