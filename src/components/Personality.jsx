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
        sx={{ fontSize: "20px", marginTop: "1em"}}
      />
    </>
  );
};

export default Personality;
