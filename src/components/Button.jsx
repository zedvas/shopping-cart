import React, { Component } from "react";
class Button extends Component {
  state = {};
  render() {
    const classText = this.props.liked ? `liked button {this.props.name}`: `button ${this.props.name}`;
    return (
      <button className={classText} onClick={()=>{this.props.callback(this.props.id, this.props.value)}}>{this.props.name}</button>
    );
  }
}

export default Button;
