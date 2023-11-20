import React from "react";

function DateText(props) {
  console.log(props);
  return (
    <div>
      <h1>
        <span className="bigNum">{props.year}</span> years
      </h1>
      <h1>
        <span className="bigNum">{props.month}</span> months
      </h1>
      <h1>
        <span className="bigNum">{props.day}</span> days
      </h1>
    </div>
  );
}

export default DateText;
