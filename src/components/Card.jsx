import React from "react";

function Card(props){
    
return (
<div className="body">
<div className="redstrip"></div>
     <div className="card">
     <div >
     {props.h1}
     {props.p}

     </div>
     </div>
     <div className="card">
     <div >

    {props.h2}
     {props.p2}
     {props.button} 
     </div>
     </div>
     </div>
     );
    }

    export default Card