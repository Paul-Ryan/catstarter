import React from 'react';

function FormattedDate(props) {
  return <p className="splash-top">{props.date.toDateString().slice(4)}</p>;
}

export default FormattedDate;
