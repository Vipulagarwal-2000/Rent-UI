import React, { useState, useEffect } from "react";
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
  //work remain here
 const [LogInState, setLogInState] = useState(0);

  function signInState(value) {
    setLogInState(value);
    console.log(value);
 }

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/signin" element={<Signin onSignIn={signInState} />} />

          <Route path="/rent" element={<Rent />} />
          <Route path="/lease" element={<Lease />} />

          <Route path="/how" element={<HOW />} />

          <Route path="/register" element={<RegisterUser />} />

          <Route path="/*" element={<NoRoute />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
