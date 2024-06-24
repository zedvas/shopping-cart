import React, { useEffect, useState } from "react";
import axios from "axios";
import Products from "./components/Products";
import Cart from "./components/Cart";
import "./App.css";
import Sort from "./components/Sort";

const App = () => {
  // const [cartProducts, setCartProducts] = useState([])
  const [data, setData] = useState([]);

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

  useEffect(() => getData, []); //double check

  const getTotalLiked = () => {
    let _data = [...data];
    _data = _data.filter((item) => {
      return item.liked;
    });
    return _data.length;
  };

  const onLike = (id) => {
    const _data = [...data];
    const index = _data.findIndex((data) => {
      return data.id === id;
    });
    _data[index].liked = !_data[index].liked;
    setData(_data);
  };

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
      return; //I thought this would clear the warning message but it doesn't?
    });

    setData(filteredData); // check if this can be done without setting state?
  };

  if (!data) {
    return <h2>Hold tight, we're getting your products...</h2>; //only rendering if data exists - is this correct?
  }

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
