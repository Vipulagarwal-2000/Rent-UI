import React from "react";

function List(props){

    return (
        <li  className={props.css}>{props.list}</li>
    );
}

export default List;