import React from 'react';

function Category(props) {
  return (
    <button className="category" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Category;
