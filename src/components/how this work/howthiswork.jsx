import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Siin from "../small/Siin";
import Search from "../small/Search";
import Register from "../small/Register"; 
import Card from "../card/Card";
import styles from './howthis.module.css';





function HOW() {



  return (
    <div >
    <Header />
        <Search />
         <Siin />
        <Register />
        <Card class1= {styles.class1} mid={<h2>HOW THIS WORKS</h2>}  class2= {styles.class2} h1={<h2>RENTER GUIDE</h2>} p= {<div><p>How to find book and rent:</p><ol><li> User finds book he likes from book section</li><li> He move to the rent screen to rent the book.</li><li>He checks the price and rent the book</li></ol></div>
        } h2= {<h2>LEASE GUIDE</h2>} p2 ={<div><p>How to put the book and rent</p><ol><li> User finds book he want to put on lease:</li><li> He move to the lease screen to lease the book.</li><li>He set the lease date and put it.</li></ol></div>} button = {""}/>
  
         
        <Footer />
        </div>
         
  
   
  );
}

export default HOW;
