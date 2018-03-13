import React from 'react';

const CategoryBar = (props) => {
  
  const setCategory = e => {
    e.preventDefault;
    console.log('The button was clicked.');
  };

  return (
    <div className="categories">
      <ul className="category-bar">
        <li><button onClick={setCategory} className="cat-button">Music</button></li>
        <li><button onClick={setCategory} className="cat-button">Film</button></li>
        <li><button onClick={setCategory} className="cat-button">Music</button></li>
        <li><button onClick={setCategory} className="cat-button">Games</button></li>
        <li><button onClick={setCategory} className="cat-button">Food</button></li>
        <li><button onClick={setCategory} className="cat-button">Arts</button></li>
        <li><button onClick={setCategory} className="cat-button">Publishing</button></li>
      </ul>
    </div>
  );
};


export default CategoryBar;
