import React from "react";
import "../RentPage.css";

function RentCard(props) {
  return (
    <div className="single-rent-page-body">
      <div className="single-rent-page-redstrip"></div>
      <div className="single-rent-page-card" >
        {props.first}

        {props.second}
      </div>
    </div>
  );
}

export default RentCard;
