import React from "react";
import "./single.css";

function Single(props) {
  return (
    <div className="single-body">
      <div className="single-redstrip"></div>
      <div className={props.css === undefined ? "single-card" : props.css}>
        {props.first}
        
      </div>
    </div>
  );
}

export default Single;
