import React from "react";

function Task({name, category, handleDelete}) {
  function handleClickDelete() {
    handleDelete(name)
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{name}</div>
      <button className="delete" onClick={handleClickDelete}>X</button>
    </div>
  );
}

export default Task;
