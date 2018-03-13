import React from 'react';

function FormattedDate(props) {
  let today = new Date();
  return <p className="splash-top">{today.toDateString().slice(4)}</p>;
}

export default FormattedDate;
