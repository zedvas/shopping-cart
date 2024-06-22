import React, { Component } from "react";
import axios from "axios";
import Products from "./components/Products";
import Cart from "./components/Cart";
import "./App.css";

class App extends Component {
  state = {
    cartProducts: [
      {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: {
          rate: 3.9,
          count: 120,
        },
        liked: true,
      },
      {
        id: 9,
        title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
        price: 64,
        description:
          "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
        category: "electronics",
        image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        rating: {
          rate: 3.3,
          count: 203,
        },
      },
    ],
  };

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
    console.log(data);
  };

  render() {
    if (!this.state.data) {
      return <h2>Hold tight, we're getting your products...</h2>; //only rendering if data exists - is this correct?
    }
    
    let cartProducts = [...this.state.data]
    cartProducts = cartProducts.filter(item=>{return item.added})
    
    return (
      <div>
        <h1>You have liked {this.getTotalLiked()} products</h1>
        {/* {this.state.data.filter(item=> {
const filtered = item.added
console.log(filtered)
return         <Cart cartProducts={filtered} />

        })} */}
        <Cart cartProducts={cartProducts}/>
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
