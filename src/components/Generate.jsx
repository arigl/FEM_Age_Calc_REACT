import React from "react";
import RefreshButton from "./RefreshButton";

function Generate(props) {
  return (
    <div className="seperator" onClick={props.handleSubmit}>
      <hr className="solid"></hr>
      <RefreshButton />
    </div>
  );
}

export default Generate;
