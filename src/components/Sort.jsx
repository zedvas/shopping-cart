const Sort = ({ onSort }) => {
  return (
    <select onChange={(e) => onSort(e.target.value)}>
      <option value="priceAsc">Price (Low-High)</option>
      <option value="priceDesc">Price (High-Low)</option>
      <option value="rating">Highest rated</option>
    </select>
  );
};

export default Sort;
