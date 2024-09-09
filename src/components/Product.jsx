import Title from "./Title";
import Image from "./Image";
import Price from "./Price";
import Controls from "./Controls";
import Personality from "./Personality";
const Product = ({
  onLike,
  onAdd,
  product: { id, image, price, rating, title, liked },
}) => {
  return (
    <>
      <div className="card">
        <Image title={title} image={image} />
        <div className="infoContainer">
                  <Title title={title} />
<div className="detailsContainer">
            <div className="details">
              <Price price={price} />
              <Personality rating={rating} />
            </div>
            <Controls id={id} onAdd={onAdd} onLike={onLike} liked={liked} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
