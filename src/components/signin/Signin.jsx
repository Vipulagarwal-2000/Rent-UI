import React, {useState} from "react";
import Single from "../singlecard/Single";
import axios from "axios";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Siin from "../small/Siin";
import Search from "../small/Search";
import Register from "../small/Register"; 




function Signin() {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
   
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  



    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(formData);
    
      try {
        const response = await axios.post("http://localhost:4000/api/signin", formData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        setResponseMessage(response.data.message);
      } catch (error) {
        console.error("Error registering user:", error.response ? error.response.data : error.message);
        setResponseMessage("Registration failed. Please check your inputs and try again.");
      }
    };
    
      return (
        <div >
        <Header />
            <Search />
             <Siin />
            <Register />
            <Single  mid={""}   
            h1={""} p= {<div>
            <form>
            <label htmlFor="name">
                <p>Email</p>
                <input
                  id="name"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label htmlFor="password">
                <p>Password</p>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </label><p><a href="/contact">Forget Password?</a></p><button id="button" type="submit" onClick={handleSubmit}> Submit</button></form></div> } 
            button = {""} />
      
      <p>{responseMessage}</p>
            <Footer />
            </div>
  
 
  );
}

export default Signin;
