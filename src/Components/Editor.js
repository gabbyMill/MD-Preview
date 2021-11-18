import React, { Component } from "react";

class Editor extends Component {
  render() {
    return (
      <div className="editor-d">
        <textarea
          id="editor"
          placeholder="Write your markdown syntax here "
          onInput={e => this.props.text(e.target.value)}
        ></textarea>
      </div>
    );
  }
}

export default Editor;
