//no functionality yet. Will integrate into sort function and adapt

const Filter = ({onFilter}) => {
  return (
    <div className="filterButtonContainer" onClick={onFilter}>
      <button value="">All pets</button>
      <button value="cats">Cats</button>
      <button value="dogs">Dogs</button>
      <button value="frogs">Frogs</button>
      <button value="rabbits">Rabbits</button>
      <button value="birds">Birds</button>
      <button value="other">Other</button>
    </div>
  );
};

export default Filter;
