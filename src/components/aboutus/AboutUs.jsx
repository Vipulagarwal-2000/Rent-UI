import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Siin from "../small/Siin";
import Search from "../small/Search";
import Register from "../small/Register"; 
import Card from "../card/Card";
import styles from './aboutus.module.css';





function AboutUs() {



  return (
    <div >
    <Header />
        <Search />
         <Siin />
        <Register />
        <Card class1= {styles.class1} mid={""} class2= {styles.class2} h1={<h2>Mission</h2>} p= {<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        } h2= {<h2>Developer</h2>} p2 ={<p>Full Stack: Vipul Agarwal</p>} button = {<button id="button2">Contribute</button>}/>
  
         
        <Footer />
        </div>
         
  
   
  );
}

export default AboutUs;
