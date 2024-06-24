const Filter = ({ onFilter }) => {
  return (
    <select onChange={(e) => onFilter(e.target.value)}>
      <option value="">All categories</option>
      <option value="electronics">Electronics</option>
      <option value="jewelery">Jewelery</option>
      <option value="mensClothing">Men's clothing</option>
      <option value="womensClothing">Women's clothing</option>
    </select>
  );
};

export default Filter;
