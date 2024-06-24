import Category from "./Category";
import Title from "./Title";
import Image from "./Image";
import Price from "./Price";
import Rating from "./Rating";
import Controls from "./Controls";
const Product = ({
  onLike,
  onAdd,
  product: {
    category,
    id,
    image,
    price,
    rating: { rate },
    title,
    liked,
  },
}) => {
  return (
    <>
      <div className="product">
        <Category category={category} />
        <Title title={title} />
        <Image title={title} image={image} width={100} />
        <Price price={price} />
        <Rating rate={rate} />
        <Controls id={id} onAdd={onAdd} onLike={onLike} liked={liked} />
      </div>
    </>
  );
};

export default Product;
