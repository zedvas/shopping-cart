const Image = ({ width, image, title }) => {
  return (
    <img
      className="image"
      style={{ width: `${width}px` }}
      src={image}
      alt={title}
    />
  );
};

export default Image;
