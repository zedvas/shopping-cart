const Price = ({ priceName, price }) => {
  return (
    <p>
      {priceName ? priceName + ":" : ""} <span className="price">{price}</span>
    </p>
  );
};

export default Price;
