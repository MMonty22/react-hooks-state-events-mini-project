import React from "react";

function CategoryFilter({categories, category, handleBtnClick}) {
  const catButtons = categories.map((cat) => {
    return <button key={cat} className={category === cat ? 'selected' : null} onClick={() => handleBtnClick(cat)}>{cat}</button>
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {catButtons}
    </div>
  );
}

export default CategoryFilter;
