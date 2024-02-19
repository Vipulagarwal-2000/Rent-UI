import React from "react";
import Register from "./Register";
import Search from "./Search";
import SignInButton from "./SignInButton";
import "./othercomponents.css"

function OtherComponents(){
    return (<div className="othercomponents-triple-div">
        <Search />
        <SignInButton />
        <Register />
        </div>
    );
}

export default OtherComponents;