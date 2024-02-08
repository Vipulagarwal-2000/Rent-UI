import React from "react";
import styles from "./single.module.css"

function Single(props){
    
return (
<div className={styles.body}>
<div className={styles.redstrip}>{props.mid}</div>
     <div className={props.class1 ===undefined ? styles.card :props.class1 }>
    
     {props.h1}
     {props.p}
     {props.button}
     </div>
     
     </div>
     
     );
    }

    export default Single;