import { Rating } from "@mui/material";

const Personality = ({ rating }) => {
  return (
    <>
      <p>Personality rating: {rating}</p>
      <Rating
        name="disabled"
        value={rating}
        disabled
        precision={0.1}
        sx={{ color: "yellow", fontSize: "40px" }}
      />
    </>
  );
};

export default Personality;
