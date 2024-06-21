import React, { Component } from "react";
import CartProduct from "./CartProduct";
import Button from "./Button";

class Cart extends Component {
  state = {};
  render() {
    return (
      <div className="cart">
        
        <div className="products">
<CartProduct title={"product1"} price={200} quantity={1}/>
<CartProduct title={"product2"} price={150} quantity={1}/>
<CartProduct title={"product3"} price={90} quantity={1}/>
<CartProduct title={"product4"} price={670} quantity={1}/>
        </div>
        
        <h3>TOTAL PRICE</h3>
        <h3>TOTAL QTY</h3>
        <Button name="checkout"/>
</div>
    );
  }
}

export default Cart;
