const Price = ({ priceName, price }) => {
  return (
    <div>
      <p>
        {priceName ? priceName + ":" : ""}{" "}
        <span className="price">{price}</span>
      </p>
    </div>
  );
};

export default Price;
