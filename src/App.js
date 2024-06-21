import React, { Component } from "react";
import axios from "axios";
import Products from "./components/Products";
import Cart from "./components/Cart";
import './App.css'

class App extends Component {
  state = {};

  componentDidMount() {
    this.getData();
  }

  async getData() {
    try {
      const data = await axios.get("https://fakestoreapi.com/products/");
      this.setState({ data: data.data });
    } catch (e) {
      console.log("oops something went wrong", e.message);
    }
  }

  render() 
  {
    if (!this.state.data) {
      return <h2>Hold tight, we're getting your products...</h2>; //only rendering if data exists - is this correct?
    }

    return (
    <div>
      <Cart/>
      <Products products={this.state.data} />
    </div>
    )
  }
}

export default App;
