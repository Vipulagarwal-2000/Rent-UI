import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

function AboutUs() {

    function click(){
        console.log("i am clicked");
    }
 

  return (
    <div style={{backgroundColor: "red", height: "100px", width: "100%"}}>
    <Header />
        <div><h2>Mission</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p></div>
        <div><h2>Developer</h2>
        <p>Full Stack: John Doe</p>
        <button onClick={click}>Contribute</button></div>
        <Footer />
    </div>
   
  );
}

export default AboutUs;
