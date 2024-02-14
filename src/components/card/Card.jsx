import React from "react";
import "./card.css";
import Component from "./CardComponent/Component";

function Card(props) {
      /* Name it more descriptive props.mid*/ 
  return (
    <div className="card-body">
      <div className="card-redstrip">{props.mid}</div> 
     
<Component css={props.class1} first= {props.h1} second={props.p}/>
<Component css={props.class2} first= {props.h2} second={props.p2}/>

     
    </div>
  );
}

export default Card;
