import {
  Add,
  AddCircle,
  Favorite,
  FavoriteBorder,
  Remove,
} from "@mui/icons-material";
import { Badge } from "@mui/material";

const Button = ({ liked, name, value, id, callback, quantity, added }) => {
  const classText = liked ? `liked button {name}` : `button ${name}`;

  return (
    <button
      className={classText}
      onClick={() => {
        callback(id, value);
      }}
    >
      {name === "add" && added && quantity !== 0 ? (
        <Badge
          badgeContent={quantity}
          color="secondary"
          showZero
          sx={{ marginRight: "0.5em" }}
        >
          <AddCircle sx={{ fontSize: "25px", color: "#4141f2" }} />
        </Badge>
      ) : name === "add" ? (
        <AddCircle sx={{ fontSize: "25px", color: "#4141f2" }} />
      ) : name === "like" && liked ? (
        <Favorite sx={{ fontSize: "25px", color: "rgb(244, 87, 113)" }} />
      ) : name === "like" && !liked ? (
        <FavoriteBorder sx={{ fontSize: "25px", color: "rgb(244, 87, 113)" }} />
      ) : name === "increment" ? (
        <Add sx={{ fontSize: "50px", color: "rgb(244, 87, 113)" }} />
      ) : name === "decrement" ? (
        <Remove sx={{ fontSize: "50px", color: "rgb(244, 87, 113)" }} />
      ) : (
        ""
      )}
    </button>
  );
};

export default Button;
