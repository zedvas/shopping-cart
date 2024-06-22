import React, { Component } from "react";
import CartProduct from "./CartProduct";
import Button from "./Button";
import Price from "./Price";

class Cart extends Component {
  render() {
    return (
      <div className="cart">
        <h1>Your Shopping Cart</h1>
        <div className="products">
          {this.props.cartProducts.map((cartProduct) => {
            return (
              <CartProduct
                key={cartProduct.id}
                id={cartProduct.id}
                title={cartProduct.title}
                price={cartProduct.price}
                quantity={cartProduct.quantity}
                totalPrice={cartProduct.price * cartProduct.quantity}
                changeQuantity={this.props.changeQuantity}
              />
            );
          })}
        </div>
        <div className="cart-info">
        <div className="totals">
          <Price priceName={"TOTAL PRICE"} price={this.props.totalPrice} />
          <p>TOTAL QTY: {this.props.totalQuantity}</p>
        </div>
        <Button name="checkout" callback={() => {}} />
      </div></div>
    );
  }
}

export default Cart;
