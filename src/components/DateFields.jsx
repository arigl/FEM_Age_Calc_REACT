import React from "react";

function DateFields(props) {
  return (
    <div className="fields">
      <label>
        Day
        <input
          type="text"
          name="day"
          placeholder="DD"
          onChange={props.handleChange}
        />
      </label>
      <label>
        Month
        <input
          type="text"
          name="month"
          placeholder="MM"
          onChange={props.handleChange}
        />
      </label>
      <label>
        Year
        <input
          type="text"
          name="year"
          placeholder="YYYY"
          onChange={props.handleChange}
        />
      </label>
    </div>
  );
}

export default DateFields;
