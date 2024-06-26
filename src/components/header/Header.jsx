import React, {useContext} from "react"; //for using jsx
import "./header.css";
import MenuItem from "./Menu/MenuItem";
import { Link } from "react-router-dom";

import { AuthContext } from "../../auth/AuthContext";

function Header(props) {

  const auth = useContext(AuthContext);
  return (
    <div className="header-head">
      <div className="header-top">
        <div className="header-left">
          <div className="header-svg">
            <svg
            id="head-svg"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-bootstrap-reboot"
              viewBox="0 0 16 16"
            >
              <path d="M1.161 8a6.84 6.84 0 1 0 6.842-6.84.58.58 0 1 1 0-1.16 8 8 0 1 1-6.556 3.412l-.663-.577a.58.58 0 0 1 .227-.997l2.52-.69a.58.58 0 0 1 .728.633l-.332 2.592a.58.58 0 0 1-.956.364l-.643-.56A6.8 6.8 0 0 0 1.16 8z" />
              <path d="M6.641 11.671V8.843h1.57l1.498 2.828h1.314L9.377 8.665c.897-.3 1.427-1.106 1.427-2.1 0-1.37-.943-2.246-2.456-2.246H5.5v7.352zm0-3.75V5.277h1.57c.881 0 1.416.499 1.416 1.32 0 .84-.504 1.324-1.386 1.324z" />
            </svg>
          </div>
          <div className="header-domain">
            <Link to="/">
              <p id="header-para">BOOK RENTAL</p>
            </Link>
          </div>
        </div>
        <div className="header-right">
        <MenuItem link="/lease" text="Lease/Give" stylelink={props.colorResponseLease} ColorIdentity= {auth.isLoggedIn ? "white" : "#B4B4B8"}/>
        <MenuItem stylelink={props.colorResponseAbout} link="/about" text="About us" ColorIdentity="white"/>
        <MenuItem stylelink={props.colorResponseBook} link="/about" text="Books"  ColorIdentity={auth.isLoggedIn ? "white" : "#B4B4B8"}/>
        <MenuItem stylelink={props.colorResponseRent} link="/rent" text="Rent" ColorIdentity={auth.isLoggedIn ? "white" : "#B4B4B8"}/>
        <MenuItem stylelink={props.colorResponseHowThisWork} link="/how" text="How this Work" ColorIdentity="white" />
        <MenuItem stylelink={props.colorResponseContact} link="/contact" text="Contact" ColorIdentity="white"/>
 
        </div>
      </div>
    </div>
  );
}

export default Header;
