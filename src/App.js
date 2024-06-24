import React, { useEffect, useState } from "react";
import axios from "axios";
import Products from "./components/Products";
import Cart from "./components/Cart";
import "./App.css";
import Sort from "./components/Sort";

const App = () => {
  const [data, setData] = useState([]);

  //get data and format as required
  const getData = async () => {
    try {
      const data = await axios.get("https://fakestoreapi.com/products/");
      data.data.map((item) => {
        item.price = Math.round(Number(item.price));
        return item;
      });
      setData(data.data);
    } catch (e) {
      console.log("oops something went wrong", e.message);
    }
  };

  //useEffect to run func
  useEffect(() => getData, []); //double check

  //funcs are sent to children as callbacks sending back ids
  const onLike = (id) => {
    const _data = [...data];
    const index = _data.findIndex((data) => {
      return data.id === id;
    });
    _data[index].liked = !_data[index].liked;
    setData(_data);
  };

  const getTotalLiked = () => {
    let _data = [...data];
    _data = _data.filter((item) => {
      return item.liked;
    });
    return _data.length;
  };


//add prop of added:true and qty:1 to data obj or increment qty if it already exists. update state with new list
  const onAdd = (id) => {
    let _data = [...data];
    const index = _data.findIndex((item) => {
      return item.id === id;
    });
    if (!_data[index].added) {
      _data[index].added = true;
      _data[index].quantity = 1;
    } else {
      _data[index].quantity = _data[index].quantity + 1;
    }
    setData(_data);
  };

//determine which button was clicked, increment/decrement qty prop in obj. if qty is 1 and user wants to decrement, remove item from cart. update state
  const changeQuantity = (id, value) => {
    let _data = [...data];
    const index = _data.findIndex((item) => {
      return item.id === id;
    });
    if (value === "increment") {
      _data[index].quantity = _data[index].quantity + 1;
    } else if (value === "decrement") {
      if (_data[index].quantity === 1) {
        _data[index].added = false;
      } else {
        _data[index].quantity = _data[index].quantity - 1;
      }
    }
    setData(_data);
  };

  //Get value for sort option and set state
  //Keep getting warning about sort needing to return a func even though this already does. Why??
  const onSort = (value) => {
    const _data = [...data];
    const filteredData = _data.sort((a, b) => {
      if (value === "priceAsc") {
        if (a.price < b.price) {
          return -1;
        }
      } else if (value === "priceDesc") {
        if (a.price > b.price) {
          return -1;
        }
      } else if (value === "rating") {
        if (a.rating.rate > b.rating.rate) {
          return -1;
        }
      }
      return; 
    });

    setData(filteredData); // Can it be done without setting state again?
  };

  //Show loading message if no data
  if (!data) {
    return <h2>Hold tight, we're getting your products...</h2>;
  }

  //filter data for prop added:true and calculate totals and pass this data to Cart comp
  let totalQuantity = 0;
  let totalPrice = 0;
  let cartProducts = [...data];

  cartProducts = cartProducts.filter((item) => {
    if (item.added) {
      totalQuantity = totalQuantity + item.quantity;
      totalPrice = totalPrice + item.price * item.quantity;
      return item.added;
    }
    return; //I thought this would clear the warning message but it doesn't?
  });

  return (
    <div>
      <Cart
        cartProducts={cartProducts}
        totalPrice={totalPrice}
        totalQuantity={totalQuantity}
        changeQuantity={changeQuantity}
      />
      <h1 className="likedMessage">
        You have liked {getTotalLiked()} products
      </h1>
      <Sort onSort={onSort} />
      <Products onLike={onLike} onAdd={onAdd} products={data} />
    </div>
  );
};

export default App;
