import React from "react";
import styles from "./styles.module.css"

function RentCard(props){
    
return (
<div className={styles.body}>
<div className={styles.redstrip}>{props.mid}</div>
     <div className={props.class1 ===undefined ? styles.card :props.class1 }>
      {props.p2}
  
     {props.p}
     
    {props.button}
    
     </div>
     
     </div>
     
     );
    }

    export default RentCard;