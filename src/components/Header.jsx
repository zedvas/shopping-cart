import {
  Favorite,
  ShoppingCart,
} from "@mui/icons-material";
import { Badge } from "@mui/material";

const Header = ({getTotalLiked, totalQuantity, displayCart}) => {
  return (
    <header>
      <div className="headerContainer">
      <h1>rent-a-pet</h1>
      <div className="headerIcons">
            <Badge
              badgeContent={getTotalLiked()}
              color="secondary"
              showZero
              sx={{ margin: "1em" }}
            >
              <Favorite sx={{ fontSize: "3rem" }} />
            </Badge>
            <Badge
              badgeContent={totalQuantity}
              color="secondary"
              sx={{ margin: "1em" }}
            >
              <ShoppingCart sx={{ fontSize: "3rem" }} onClick={displayCart} />
            </Badge>
          </div></div>
    </header>
  );
};

export default Header;
