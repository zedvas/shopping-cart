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
        sx={{ fontSize: "20px", color: "#476d00", marginTop: "1em"}}
      />
    </>
  );
};

export default Personality;
