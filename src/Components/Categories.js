import React, { useState } from "react";

const Categories = ({ categories }) => {
  const [mainCategory, setMainCategory] = useState("all");

  return (
    <div className="btn-container">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={
            category === mainCategory ? "filter-btn highlight" : "filter-btn"
          }
          onClick={() => {
            setMainCategory(category)
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
