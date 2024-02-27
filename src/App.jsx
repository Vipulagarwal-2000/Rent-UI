import React, { useState, useEffect, useCallback } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./components/aboutus/AboutUs";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import OtherComponents from "./components/othercomponents/OtherComponent";
import Contact from "./components/contact/Contact";
import HOW from "./components/how this work/howthiswork";
import Signin from "./components/signin/Signin";
import RegisterUser from "./components/register/RegisterUser";
import Rent from "./components/rent/Rent";
import Lease from "./components/lease/Lease";
import NoRoute from "./components/NoRoute/NoRoute";


import {  AuthContext } from "./auth/AuthContext";

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
      <OtherComponents />
      <h1 style={{ backgroundColor: "blue" }}>{message}</h1>

      <Footer />
    </div>
  );
}










function App() {
  const [logInState, setLogInState] = useState(false);

  

  const handleSignIn = (signInStatus) => {
    // Update the login state based on the signInStatus
    if (signInStatus === 1) {
      console.log("reach signin");
      login();
    } else {
      console.log("not reach signin");
      logout();
    }
  };
  
  const login = useCallback(() => {
    setLogInState((prevLogInState) => {
      console.log("Updated state: true");
      return true; // Returning the updated state value
    });
  }, []);


  
  const logout = useCallback(() => {
    setLogInState((prevLogInState) => {
      console.log("Updated state: false");
      return false; // Returning the updated state value
    });
  }, []);


  return (
    <div><AuthContext.Provider value={
      {isLoggedIn: logInState,
      login: login,
      logout: logout}}>
 
      <Router>
      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/signin" element={<Signin onSignIn={handleSignIn} />} />

          <Route path="/rent" element={<Rent />} />
          <Route path="/lease" element={<Lease />} />

          <Route path="/how" element={<HOW />} />

          <Route path="/register" element={<RegisterUser onSignIn={handleSignIn}/>} />

          <Route path="/*" element={<NoRoute />} />
        </Routes>
       
      </Router>
      </AuthContext.Provider>
  
    </div>
  );
}

export default App;
