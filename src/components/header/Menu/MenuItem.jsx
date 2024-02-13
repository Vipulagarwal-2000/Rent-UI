import React from "react"; //for using jsx
import "../header.css";

function MenuItem(props) { 
    return (
        <span class="header-menu">
            <a href={props.link}>{props.text}</a>
          </span>

    );

}

export default MenuItem;
