import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./noroute.css"


function NoRoute() {

  

  return (
    <div>
        <Header />
        <h1 className="NoRoute-css"> 404 : Wrong route/Endpoint!!</h1>
        <Footer />
    </div>
   
  );
}

export default NoRoute;
