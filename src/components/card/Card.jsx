import React from "react";
import "./card.css"

function Card(props){
    
return (
<div className="body">
<div className="redstrip">{props.mid}</div>
     <div className={props.class1 ===undefined ?"card":props.class1 }>
     <div >
     {props.h1}
     {props.p}

     </div>
     </div>
     <div className={props.class2 ===undefined ?"card":props.class2}>
     <div >

    {props.h2}
     {props.p2}
     {props.button} 
     </div>
     </div>
     </div>
     );
    }

    export default Card;