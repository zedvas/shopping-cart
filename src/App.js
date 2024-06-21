import React, { Component } from "react";
import axios from "axios";
import Products from "./components/Products";
import Cart from "./components/Cart";
import "./App.css";

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

  getTotalLiked = () => {
    let data = [...this.state.data];
    data = data.filter((item) => {
      return item.liked;
    });
    return data.length;
  };

  onLike = (id) => {
    const data = [...this.state.data];
    const index = data.findIndex((data) => {
      return data.id === id;
    });
    console.log(index);
    data[index].liked = !data[index].liked;
    console.log(data[index].liked)
    this.setState({ data });
  };

  onAdd = (id) => {
    console.log("added", id);
  };

  render() {
    if (!this.state.data) {
      return <h2>Hold tight, we're getting your products...</h2>; //only rendering if data exists - is this correct?
    }

    return (
      <div>
        <h1>You have liked {this.getTotalLiked()} products</h1>
        <Cart />
        <Products
          onLike={this.onLike}
          onAdd={this.onAdd}
          products={this.state.data}
        />
      </div>
    );
  }
}

export default App;
