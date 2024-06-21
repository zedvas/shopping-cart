import React, { Component } from "react";
class Category extends Component {
  state = {};
  render() {
    return <p className="category">{this.props.category}</p>;
  }
}

export default Category;
