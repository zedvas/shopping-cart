import { AddCircle, Favorite } from "@mui/icons-material";

const Button = ({ liked, name, value, id, callback }) => {
  const classText = liked ? `liked button {name}` : `button ${name}`;

  return (
    <button
      className={classText}
      onClick={() => {
        callback(id, value);
      }}
    >
      {name === "add" ? (
        <AddCircle sx={{ fontSize: "50px", color: "rgb(230, 105, 21)" }} />
      ) : name === "like" ? (
        <Favorite sx={{ fontSize: "50px", color: "rgb(244, 87, 113)" }} />
      ) : (
        ""
      )}
    </button>
  );
};

export default Button;
