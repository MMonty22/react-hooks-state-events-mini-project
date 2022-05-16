import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [taskInfo, setTaskInfo] = useState(TASKS)
  const [category, setCategory] = useState("All")

  function handleDelete(name) {
    const newTaskList = taskInfo.filter((task) => name !== task.text)
    setTaskInfo(newTaskList)
  } 

  const filteredList = taskInfo.filter((task) => {
    if (category === "All") return taskInfo
    return category === task.category
  })

  function onItemFormSubmit(newTask, option) {
    const newTaskData = {text: newTask, category: option}
    const allTasks = [...taskInfo, newTaskData]
    setTaskInfo(allTasks)
    return allTasks
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} category={category} handleBtnClick={setCategory}/>
      <NewTaskForm categories={CATEGORIES} onItemFormSubmit={onItemFormSubmit}/>
      <TaskList taskInfo={filteredList} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
