import React, {useState, useEffect} from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AboutUs from "./components/aboutus/AboutUs";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Siin from "./components/small/Siin";
import Search from "./components/small/Search";
import Register from "./components/small/Register";
import Contact from "./components/contact/Contact";
import HOW from "./components/how this work/howthiswork";
import Signin from "./components/signin/Signin";
import RegisterUser from "./components/register/RegisterUser";
import Rent from "./components/rent/Rent";
import Lease from "./components/lease/Lease";



function HomePage() {
    const [message, setMessage] = useState("");
  
    useEffect(() => {
      fetch("http://localhost:4000/message")
        .then((res) => res.json())
        .then((data) => setMessage(data.message));
    }, []);
    return (
        <div>
        <Header />
        <Search />
         <Siin />
        <Register />
          <h1 style={{ backgroundColor: "blue" }}>{message}</h1>
         
          <Footer/>
         
        </div>
      );
    }

function App() {
  return (
    <div>
  
    <Router>
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/how" element={<HOW />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/lease" element={<Lease />} />
      </Routes>
    </Router>
    
    </div>
  );
}

export default App;