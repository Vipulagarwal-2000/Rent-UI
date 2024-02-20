import React, {useState, useEffect} from "react";
import "./othercomponents.css";

function Register(props) {
   
const [style, setStyle] = useState(true);

useEffect(() => {
  if (props.isRegisterAllowed !== undefined) {
    setStyle(props.isRegisterAllowed);
  }
}, [props.isRegisterAllowed]);

  return (
   
      <div className={!style?"hidden-register":"other-register"}>
        
        <a href="/register">
          <p id="other-para">REGISTER</p>
        </a>
        </div>
    
  );
}

export default Register;
