const Button = ({ liked, name, value, id, callback }) => {

  const classText = liked ? `liked button {name}` : `button ${name}`;
  
  return (
    <button
      className={classText}
      onClick={() => {
        callback(id, value);
      }}
    >
      {name}
    </button>
  );
};

export default Button;
