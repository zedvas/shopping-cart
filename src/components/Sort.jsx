const Sort = ({ onSort, showSort }) => {
  return (
    <select
      onChange={(e) => onSort(e.target.value)}
      className={!showSort && "hide"}
    >
      <option value="priceAsc">Price (Low-High)</option>
      <option value="priceDesc">Price (High-Low)</option>
      <option value="rating">Highest rated</option>
    </select>
  );
};

export default Sort;
