import React from "react";
import Register from "./Register";
import Search from "./Search";
import SignInButton from "./SignInButton";
import "./othercomponents.css"

function OtherComponents(props){




    return (<div className="othercomponents-triple-div">
        <Search isSearchingAllowed={props.search} />
        <SignInButton />
        <Register isRegisterAllowed={props.register} />
        </div>
    );
}

export default OtherComponents;