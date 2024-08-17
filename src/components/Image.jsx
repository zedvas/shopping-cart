const Image = ({image, title }) => {
  return (
    <div className="imgContainer">
    <img
      src={image}
      alt={title}
    /></div>
  );
};

export default Image;
