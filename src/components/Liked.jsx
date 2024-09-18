import { Close } from "@mui/icons-material";
import LikedProduct from "./LikedProduct";

const Liked = ({ likedProducts, likedVisible, displayLiked }) => {
  const getToDisplay = () => {
    if (likedProducts.length === 0) {
      return <p className="noProducts">Nothing to show yet! Try liking some items</p>;
    } else {
      return likedProducts.map((likedProduct) => {
        return (
          <LikedProduct
            key={likedProduct.id}
            id={likedProduct.id}
            title={likedProduct.title}
            price={likedProduct.price}
            image={likedProduct.image}
          />
        );
      });
    }
  };
  return (
    <div className={likedVisible? "cart cartVisible" : "cart"}>
      <Close className="closeCart" sx={{alignSelf: "flex-end"}} onClick={displayLiked}/>
      <h1>Your Liked Items</h1>
      <div className="products">{getToDisplay()}</div>
    </div>
  );
};

export default Liked;
