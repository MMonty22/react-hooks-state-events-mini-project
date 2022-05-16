import React, {useState} from "react";

function NewTaskForm({categories, onItemFormSubmit}) {
  const [option, setOption] = useState("Code")

  const options = categories.map((opt) => {
    return <option value={opt} key={opt}>{opt}</option>
  })

  function handleOptionChange(event) {
    setOption(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    onItemFormSubmit(event.target[0].value, option)
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category" onChange={handleOptionChange}>
          {/* render <option> elements for each category here */}
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
