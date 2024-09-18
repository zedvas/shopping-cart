import Title from "./Title";
import Image from "./Image";

const LikedProduct = ({ title, image }) => {
  return (
    <div className="likedProduct">
      <Image title={title} image={image} width={50} />
      <Title title={title} />
    </div>
  );
};

export default LikedProduct;
