import Button from "./Button";
const Controls = ({ id, onAdd, onLike, liked, quantity, added
 }) => {
  return (
    <div className="controls">
      <Button name="add" id={id} callback={onAdd} quantity={quantity} added={added}/>
      <Button name="like" id={id} callback={onLike} liked={liked} />
    </div>
  );
};

export default Controls;
