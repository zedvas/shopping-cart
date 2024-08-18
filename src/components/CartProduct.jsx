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
      <div>
        <Image title={title} image={image} width={50} />
        <Title title={title} />
      </div>
      <div className="infoContainer">
        <Price price={price} priceName={"Unit price"} />
        <Price price={totalPrice} priceName={"Total Price"} />

        <div className="buttonContainer">
          <Button
            name="increment"
            value="increment"
            id={id}
            callback={changeQuantity}
          />
          <Quantity quantity={quantity} />
          <Button
            name="decrement"
            value="decrement"
            id={id}
            callback={changeQuantity}
          />
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
