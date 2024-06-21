import React, { Component } from "react";
class Button extends Component {
  state = {};
  render() {
    return (
      <button className={`button ${this.props.name}`}>{this.props.name}</button>
    );
  }
}

export default Button;
