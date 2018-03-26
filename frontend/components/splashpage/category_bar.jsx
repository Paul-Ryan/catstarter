import React from 'react';

const CategoryBar = (props) => {

  const setCategory = e => {
    e.preventDefault;
    console.log('The button was clicked.');
  };

  return (
    <div className="categories">
      <ul className="category-bar">
        <li><button onClick={setCategory} value="Music" className="cat-button">Music</button></li>
        <li><button onClick={setCategory} value="Games" className="cat-button">Games</button></li>
        <li><button onClick={setCategory} value="Food" className="cat-button">Food</button></li>
        <li><button onClick={setCategory} value="Arts" className="cat-button">Arts</button></li>
        <li><button onClick={setCategory} value="Publishing" className="cat-button">Publishing</button></li>
        <li><button onClick={setCategory} value="Crafts" className="cat-button">Crafts</button></li>
        <li><button onClick={setCategory} value="Film" className="cat-button">Film</button></li>
        <li><button onClick={setCategory} value="Technology" className="cat-button">Technology</button></li>
        <li><button onClick={setCategory} value="Design" className="cat-button">Design</button></li>
      </ul>
    </div>
  );
};


export default CategoryBar;
