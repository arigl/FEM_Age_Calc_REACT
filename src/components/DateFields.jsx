import React from "react";

function DateFields() {
  return (
    <div className="fields">
      <label>
        Day
        <input type="text" name="day" />
      </label>
      <label>
        Month
        <input type="text" name="month" />
      </label>
      <label>
        Year
        <input type="text" name="year" />
      </label>
    </div>
  );
}

export default DateFields;
