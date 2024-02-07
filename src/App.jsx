import React, {useState, useEffect} from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import AboutUs from "./AboutUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Siin from "./components/Siin";
import Search from "./components/Search";
import Register from "./components/Register";
import Contact from "./Contact";






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
      </Routes>
    </Router>
    
    </div>
  );
}

export default App;