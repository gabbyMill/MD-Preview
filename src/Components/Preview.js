import React, { Component } from "react";

class Preview extends Component {
  render() {
    return (
      <div id="Preview">
        <h3>{this.props.content}</h3>
      </div>
    );
  }
}

export default Preview;
