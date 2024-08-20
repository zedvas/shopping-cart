import CartProduct from "./CartProduct";
import Button from "./Button";
import Price from "./Price";
import { Close } from "@mui/icons-material";

const Cart = ({ cartProducts, changeQuantity, totalPrice, totalQuantity, cartVisible, displayCart }) => {
  const getToDisplay = () => {
    if (cartProducts.length === 0) {
      return <p className="noProducts">Nothing to show yet! Try adding some items to your cart</p>;
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
    <div className={cartVisible? "cart cartVisible" : "cart"}>
      <Close className="closeCart" sx={{alignSelf: "flex-end"}} onClick={displayCart}/>
      <h1>Your Shopping Cart</h1>
      <div className="products">{getToDisplay()}</div>
      <div className="cartInfo">
        <div className="totals">
          <Price priceName={"TOTAL"} price={totalPrice} />
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
