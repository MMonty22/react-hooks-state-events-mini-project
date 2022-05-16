import React from "react";
import Task from "./Task"

function TaskList({taskInfo, handleDelete}) {
  const tasks = taskInfo.map((task => {
    return <Task name={task.text} key={task.text} category={task.category} handleDelete={handleDelete}/>
  }))
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks}
    </div>
  );
}

export default TaskList;
