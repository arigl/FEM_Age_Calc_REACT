import React from "react";

import DateFields from "./components/DateFields";
import DateText from "./components/DateText";
import Generate from "./components/Generate";

function App() {
  const [dates, setDates] = React.useState(["--", "--", "--"]);

  return (
    <main>
      <DateFields year={dates[0]} month={dates[1]} day={dates[2]} />
      <Generate />
      <DateText year={dates[0]} month={dates[1]} day={dates[2]} />
    </main>
  );
}

export default App;
