import React from "react"; //for using jsx
import "../header.css";
import { Link } from "react-router-dom";


function MenuItem(props) { 

   
    return (
        <span className="header-menu">
            <Link style={{color : props.stylelink !== undefined ? "#FFD95A": props.ColorIdentity}} to={props.link}>{props.text}</Link>
          </span>

    );

}

export default MenuItem;
