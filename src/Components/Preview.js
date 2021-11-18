import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

class Preview extends Component {
  render() {
    return (
      <ReactMarkdown remarkPlugins={[remarkGfm]} id="Preview">
        {this.props.content}
      </ReactMarkdown>
    );
  }
}

export default Preview;
