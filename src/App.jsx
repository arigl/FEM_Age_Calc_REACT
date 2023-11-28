import React from "react";

import DateFields from "./components/DateFields";
import DateText from "./components/DateText";
import Generate from "./components/Generate";
import { DateTime, Interval } from "luxon";

function App() {
  const [dates, setDates] = React.useState({
    day: "--",
    month: "--",
    year: "--",
  });

  const [finalDate, setFinalDate] = React.useState({
    day: "--",
    month: "--",
    year: "--",
  });

  const handleChange = (e) => {
    setDates((prevDateData) => {
      return {
        ...prevDateData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = () => {
    const currentDate = DateTime.now();
    //const userDate = new Date(dates.year, dates.month, dates.day);
    const userDate = DateTime.fromObject({
      year: dates.year,
      month: dates.month,
      day: dates.day,
    });
    console.log(userDate);
    const interval = Interval.fromDateTimes(userDate, DateTime.now());
    //DateTime.local(dates.year, dates.month, dates.day)
    const intDays = interval.length("days");
    const intMonth = interval.length("months");
    const intYear = interval.length("years");

    const diff = currentDate
      .diff(userDate, ["years", "months", "days", "hours"])
      .toObject();

    console.log(diff);
    //console.log(interval);
    setFinalDate({
      day: diff.days,
      month: diff.months,
      year: diff.years,
    });
  };

  return (
    <main>
      <DateFields
        year={dates.year}
        month={dates.month}
        day={dates.day}
        handleChange={handleChange}
      />
      <Generate handleSubmit={handleSubmit} />
      <DateText
        year={finalDate.year}
        month={finalDate.month}
        day={finalDate.day}
      />
    </main>
  );
}

export default App;
