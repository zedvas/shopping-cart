const Image = ({image, title }) => {
  return (
    <div className="imgContainer">
    <img width={"300px"}
      src={image}
      alt={title}
    /></div>
  );
};

export default Image;
