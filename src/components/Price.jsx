import React, { Component } from "react";
class Price extends Component {
  state = {};
  render() {
    return (
      <div>
        <p>{this.props.priceName? this.props.priceName + ":":""} <span  className="price">{this.props.price}</span></p>
      </div>
    );
  }
}

export default Price;
