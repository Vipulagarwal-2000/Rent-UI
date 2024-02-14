import React from "react";

function Component(props) {
  return (
    <div className={props.css === undefined ? "card-card" : props.css}>
      <div>
        {props.first}
        {props.second}
      </div>
    </div>
  );
}

export default Component;
