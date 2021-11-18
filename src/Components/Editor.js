import React, { Component } from "react";
import starter from "../mdStarter";
class Editor extends Component {
  render() {
    return (
      <div className="editor-d">
        <textarea
          id="editor"
          defaultValue={starter}
          onInput={e => this.props.text(e.target.value)}
        ></textarea>
      </div>
    );
  }
}

export default Editor;
