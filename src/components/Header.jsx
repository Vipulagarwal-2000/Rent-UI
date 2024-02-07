import React from "react";
import "./uncommon.css"



function Header() {

    

  return (
    <div className="head">
    <div className="top">
      <div className="left">
        <div class="svg">
        <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bootstrap-reboot" viewBox="0 0 16 16">
  <path d="M1.161 8a6.84 6.84 0 1 0 6.842-6.84.58.58 0 1 1 0-1.16 8 8 0 1 1-6.556 3.412l-.663-.577a.58.58 0 0 1 .227-.997l2.52-.69a.58.58 0 0 1 .728.633l-.332 2.592a.58.58 0 0 1-.956.364l-.643-.56A6.8 6.8 0 0 0 1.16 8z"/>
  <path d="M6.641 11.671V8.843h1.57l1.498 2.828h1.314L9.377 8.665c.897-.3 1.427-1.106 1.427-2.1 0-1.37-.943-2.246-2.456-2.246H5.5v7.352zm0-3.75V5.277h1.57c.881 0 1.416.499 1.416 1.32 0 .84-.504 1.324-1.386 1.324z"/>
</svg>
        </div>
        <div>
          <a href="/"> <h1>AT RENTAL</h1></a>
        </div>
      </div>
      <div className="right">
      <span><a href="/about">Lease/Give</a></span>
        <span><a href="/about">About us</a></span>
      
        <span><a href="/about">Books</a></span>
        <span><a href="/about">Rent</a></span>
        <span><a href="/about">How this Work</a></span>
        
        <span><a href="/contact">Contact</a></span>
       
      </div>
    </div>
    
  </div>
 
  );
}

export default Header;
