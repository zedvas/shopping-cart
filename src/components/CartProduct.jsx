import Title from "./Title";
import Price from "./Price";
import Quantity from "./Quantity";
import Button from "./Button";
import Image from "./Image";

const CartProduct = ({
  title,
  image,
  price,
  totalPrice,
  quantity,
  id,
  changeQuantity,
}) => {
  return (
    <div className="cartProduct">
      <Title title={title} />
      <Image title={title} image={image} width={50} />
      <Price price={price} priceName={"Unit price"} />
      <Price price={totalPrice} priceName={"Total Price"} />
      <Quantity quantity={quantity} />
      <div className="button-container">
        <Button name="+" value="increment" id={id} callback={changeQuantity} />
        <Button name="-" value="decrement" id={id} callback={changeQuantity} />
      </div>
    </div>
  );
};

export default CartProduct;
