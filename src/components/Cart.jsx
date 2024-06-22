import React, { Component } from "react";
import CartProduct from "./CartProduct";
import Button from "./Button";

class Cart extends Component {
  state = {};
  render() {
    return (
      <div className="cart">
        
        <div className="products">
          {this.props.cartProducts.map(cartProduct=> {
            return <CartProduct key={cartProduct.id} title={cartProduct.title} price={cartProduct.price} quantity={cartProduct.quantity}/>
          })}
        </div>
        
        <h3>TOTAL PRICE</h3>
        <h3>TOTAL QTY</h3>
        <Button name="checkout" callback={()=>{}}/>
</div>
    );
  }
}

export default Cart;
