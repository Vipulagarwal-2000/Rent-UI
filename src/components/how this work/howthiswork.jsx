import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import OtherComponents from "../othercomponents/OtherComponent";
import Card from "../Card/Card";
import "./howthiswork.css";
import List from "./List/List";

function HOW() {
  const arr = [
    "User finds book he likes from book section.",
    "He move to the rent screen to rent the book.",
    "He checks the price and rent the book.",
  ];
  const arr2 = [
    "User finds book he want to put on lease.",
    "He move to the lease screen to lease the book.",
    "He set the lease date and put it.",
  ];

  
    const newarr = arr.map(item => <List css="how-this-work-list" key={arr.indexOf(item)} list={item}/>);
    const newarr2 = arr2.map(item => <List css="how-this-work-list"  key={arr2.indexOf(item)} list={item}/>);
    
  

  return (
    <div>
      <Header />
      <OtherComponents search={false}/>
      <Card
        css="class1"
        mid={<h2 className="how-this-work-h2">HOW THIS WORKS</h2>}
        css2="class2"
        h1={<h2 className="how-this-work-h2">RENTER GUIDE</h2>}
        p={
          <div>
            <p className="how-this-work-p">
              How to find book and rent<strong>:</strong>
            </p>
            <ul>
             {newarr}
            </ul>
          </div>
        }
        h2={<h2 className="how-this-work-h2">LEASE GUIDE</h2>}
        p2={
          <div>
            <p className="how-this-work-p">
              How to put the book and rent<strong>:</strong>
            </p>
            <ul>
            {newarr2}
            </ul>
          </div>
        }
        button={""}
      />

      <Footer />
    </div>
  );
}

export default HOW;
