import React, { useEffect, useState } from "react";
import Products from "./components/Products";
import Cart from "./components/Cart";
import "./App.css";
import Sort from "./components/Sort";
import Filter from "./components/Filter";
import Header from "./components/Header";
import {
  Favorite,
  ShoppingCart,
  Tune,
  Sort as SortIcon,
} from "@mui/icons-material";
import { Badge } from "@mui/material";
// import {pets} from "./pets.js";

const App = () => {
  const [data, setData] = useState([]);
  const [filteredAndSorted, setFilteredAndSorted] = useState([]);
  const [showSort, setShowSort] = useState();
  const [showFilter, setShowFilter] = useState();
  const [cartVisible, setCartVisible] = useState(false);

  const pets = [
    {
      id: "1",
      title: "Sprinkles",
      image: "/pets/gratisography-boxing-boxer-free-stock-photo.jpg",
      category: "Dogs",
      rating: 4.75,
      price: "87"
    },
    {
      id: "2",
      title: "Tofu",
      image: "/pets/gratisography-business-bunny-free-stock-photo.jpg",
      category: "Rabbits",
      rating: 1,
      price: "102"
    },
    {
      id: "3",
      title: "Muffler",
      image: "/pets/gratisography-cat-thief-stock-photo.jpg",
      category: "Cats",
      rating: 3.5,
      price: "131"
    },
    {
      id: "4",
      title: "Spatula",
      image: "/pets/gratisography-chill-chinchilla-free-stock-photo.jpg",
      category: "Other",
      rating: 2.18,
      price: "77"
    },
    {
      id: "5",
      title: "Velcro",
      image: "/pets/gratisography-cool-cat.jpg",
      category: "Cats",
      rating: 5,
      price: "144"
    },
    {
      id: "6",
      title: "Nimbus",
      image: "/pets/gratisography-cyber-kitty.jpg",
      category: "Cats",
      rating: 0.92,
      price: "93"
    },
    {
      id: "7",
      title: "Bagel II",
      image: "/pets/gratisography-flying-squirrel-free-stock-photo.jpg",
      category: "Other",
      rating: 4.4,
      price: "68"
    },
    {
      id: "8",
      title: "Picklejuice",
      image: "/pets/gratisography-frog-racer-free-stock-photo.jpg",
      category: "Frogs",
      rating: 2,
      price: "115"
    },
    {
      id: "9",
      title: "Wigglebutt",
      image: "/pets/gratisography-giraffe-portrait-free-stock-photo.jpg",
      category: "Other",
      rating: 1.67,
      price: "72"
    },
    {
      id: "10",
      title: "Fang Jr",
      image: "/pets/gratisography-kitten-chef-free-stock-photo.jpg",
      category: "Cats",
      rating: 3,
      price: "139"
    },
    {
      id: "11",
      title: "Bullet",
      image: "/pets/gratisography-kitten-plant-free-stock-photo.jpg",
      category: "Cats",
      rating: 4,
      price: "110"
    },
    {
      id: "12",
      title: "Snuggles",
      image: "/pets/gratisography-neon-frog-free-stock-photo.jpg",
      category: "Frogs",
      rating: 2.89,
      price: "80"
    },
    {
      id: "13",
      title: "Simon",
      image: "/pets/gratisography-not-happy-in-a-hat-stock-photo.jpg",
      category: "Dogs",
      rating: 0.5,
      price: "134"
    },
    {
      id: "14",
      title: "Beaker",
      image: "/pets/gratisography-parrot-pirate-free-stock-photo.jpg",
      category: "Birds",
      rating: 3.14,
      price: "99"
    },
    {
      id: "15",
      title: "Zeus",
      image: "/pets/gratisography-reindeer-dog.jpg",
      category: "Dogs",
      rating: 1,
      price: "143"
    },
    {
      id: "16",
      title: "Dash",
      image: "/pets/gratisography-sloth-breakfast-free-stock-photo.jpg",
      category: "Other",
      rating: 4.8,
      price: "125"
    },
    {
      id: "17",
      title: "Pudding",
      image: "/pets/gratisography-toadstool-free-stock-photo.jpg",
      category: "Frogs",
      rating: 2.55,
      price: "67"
    },
    {
      id: "18",
      title: "Pancake",
      image: "/pets/gratisography-wedding-dog-free-stock-photo.jpg",
      category: "Dogs",
      rating: 4.9,
      price: "85"
    }
  ]

  //get data and format as required
  const getData = () => {
    console.log(pets);
    const _pets = pets.map((item) => {
      item.price = Math.round(Number(item.price));
      return item;
    });
    setData(_pets);
    setFilteredAndSorted(_pets);
  };

  //useEffect to run func
  useEffect(() => getData, [getData]); //double check

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
    const _data = [...filteredAndSorted];
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
        if (a.rating > b.rating) {
          return -1;
        }
      }
      return 0;
    });

    setFilteredAndSorted(filteredData);
  };

  const onFilter = (e) => {
    console.log(e.target.value);
    const _data = [...data];
    if (e.target.value === "" || e.target.value === undefined) {
      return;
    } else if (e.target.value === "all") {
      setFilteredAndSorted(data);
    } else {
      const filtered = _data.filter((pet) => {
        // console.log(pet.category.toLowerCase(), e.target.value)
        return pet.category.toLowerCase() === e.target.value.toLowerCase();
      });
      setFilteredAndSorted(filtered);
    }
  };

  const handleSortButton = () => {
    setShowSort(!showSort);
  };
  const handleFilterButton = () => {
    setShowFilter(!showFilter);
  };

  const displayCart = () => {
    setCartVisible(!cartVisible);
    return;
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
    return false;
  });

  return (
    <>
      <Header />
      <div className="container">
        <Cart
          cartProducts={cartProducts}
          totalPrice={totalPrice}
          totalQuantity={totalQuantity}
          changeQuantity={changeQuantity}
          cartVisible={cartVisible}
          displayCart={displayCart}
        />
        <div className="icons">
          <div>
            <button
              onClick={handleSortButton}
              className={showSort ? "showSort" : ""}
            >
              <span>Sort</span>
              <SortIcon sx={{ fontSize: "3rem" }} />
            </button>
            <button
              onClick={handleFilterButton}
              className={showFilter ? "showFilter" : ""}
            >
              <span>Filter</span> <Tune sx={{ fontSize: "3rem" }} />
            </button>
          </div>
          <div>
            <Badge
              badgeContent={getTotalLiked()}
              color="secondary"
              showZero
              sx={{ margin: "1em" }}
            >
              <Favorite sx={{ fontSize: "3rem" }} />
            </Badge>
            <Badge
              badgeContent={totalQuantity}
              color="secondary"
              sx={{ margin: "1em" }}
            >
              <ShoppingCart sx={{ fontSize: "3rem" }} onClick={displayCart} />
            </Badge>
          </div>
        </div>
        <div className="filterAndSortContainer">
          <Sort onSort={onSort} showSort={showSort} />
          <Filter onFilter={onFilter} showFilter={showFilter} />
        </div>
        <Products onLike={onLike} onAdd={onAdd} products={filteredAndSorted} />
      </div>
    </>
  );
};

export default App;
