import React, { Component } from "react";
import axios from "axios";
import Products from "./components/Products";
import Cart from "./components/Cart";
import "./App.css";

class App extends Component {
  state = {
    cartProducts:[],
  };

  componentDidMount() {
    this.getData();
  }

  async getData() {
    try {
      const data = await axios.get("https://fakestoreapi.com/products/");
      data.data.map((item) => {
        item.price = Math.round(Number(item.price));
        return item;
      });
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
    data[index].liked = !data[index].liked;
    console.log(data[index].liked);
    this.setState({ data });
  };

  onAdd = (id) => {
    let data = [...this.state.data];
    const index = data.findIndex((item) => {
      return item.id === id;
    });
    if (!data[index].added) {
      data[index].added = true;
      data[index].quantity = 1;
    } else {
      data[index].quantity = data[index].quantity + 1;
    }
    this.setState({ data });
  };
  changeQuantity = (id, value) => {
    let data = [...this.state.data];
    const index = data.findIndex((item) => {
      return item.id === id;
    });
    if (value === "increment") {    data[index].quantity = data[index].quantity + 1;
} else if (value === "decrement") {
  if (data[index].quantity === 1) {data[index].added = false} else {
  data[index].quantity = data[index].quantity - 1}
}

    this.setState({ data });
  };
  render() {
    if (!this.state.data) {
      return <h2>Hold tight, we're getting your products...</h2>; //only rendering if data exists - is this correct?
    }
    let totalQuantity = 0;
    let totalPrice = 0;
    let cartProducts = [...this.state.data];
    
    cartProducts = cartProducts.filter((item) => {
      if (item.added) {
        totalQuantity = totalQuantity + item.quantity;
        totalPrice = totalPrice + item.price * item.quantity;
        return item.added;
      }
    });

    return (
      <div>
        <Cart
          cartProducts={cartProducts}
          totalPrice={totalPrice}
          totalQuantity={totalQuantity}
          changeQuantity={this.changeQuantity}
        />
        <h1 className="likedMessage">You have liked {this.getTotalLiked()} products</h1>
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
