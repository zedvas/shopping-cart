import CartProduct from "./CartProduct";
import Button from "./Button";
import Price from "./Price";

const Cart = ({ cartProducts, changeQuantity, totalPrice, totalQuantity }) => {
  const getToDisplay = () => {
    if (cartProducts.length === 0) {
      return <h1>Nothing to show yet! Try adding some items to your cart</h1>;
    } else {
      return cartProducts.map((cartProduct) => {
        return (
          <CartProduct
            key={cartProduct.id}
            id={cartProduct.id}
            title={cartProduct.title}
            price={cartProduct.price}
            image={cartProduct.image}
            quantity={cartProduct.quantity}
            totalPrice={cartProduct.price * cartProduct.quantity}
            changeQuantity={changeQuantity}
          />
        );
      });
    }
  };
  return (
    <div className="cart">
      <h1>Your Shopping Cart</h1>
      <div className="products">{getToDisplay()}</div>
      <div className="cart-info">
        <div className="totals">
          <Price priceName={"TOTAL PRICE"} price={totalPrice} />
          <p>
            TOTAL QTY: <span className="quantity">{totalQuantity}</span>
          </p>
        </div>
        <Button name="checkout" callback={() => {}} />
      </div>
    </div>
  );
};

export default Cart;
