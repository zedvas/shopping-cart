import Button from "./Button";
const Controls = ({ id, onAdd, onLike, liked }) => {
  return (
    <div className="controls">
      <Button name="add" id={id} callback={onAdd} />
      <Button name="like" id={id} callback={onLike} liked={liked} />
    </div>
  );
};

export default Controls;
