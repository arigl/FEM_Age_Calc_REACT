import React from "react";

function DateFields(props) {
  return (
    <div className="fields">
      <label>
        Day
        <input type="text" name="day" placeholder="DD" />
      </label>
      <label>
        Month
        <input type="text" name="month" placeholder="MM" />
      </label>
      <label>
        Year
        <input type="text" name="year" placeholder="YYYY" />
      </label>
    </div>
  );
}

export default DateFields;
