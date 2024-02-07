import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Siin from "./components/Siin";
import Search from "./components/Search";
import Register from "./components/Register"; 
import "./components/card.css"
import Card from "./components/Card";


function AboutUs() {



  return (
    <div >
    <Header />
        <Search />
         <Siin />
        <Register />
        <Card class1={"block"} class2= {"block2"} h1={<h2>Mission</h2>} p= {<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        } h2= {<h2>Developer</h2>} p2 ={<p>Full Stack: Vipul Agarwal</p>} button = {<button>Contribute</button>}/>
  
         
        <Footer />
        </div>
         
  
   
  );
}

export default AboutUs;
