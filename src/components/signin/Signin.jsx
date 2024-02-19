import React, { useState } from "react";
import Single from "../singlecard/Single";
import axios from "axios";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import OtherComponents from "../othercomponents/OtherComponent";

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
    

    try {
      const response = await axios.post(
        "http://localhost:4000/api/signin",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);//it is showing result in the structure
    
    
      setResponseMessage(()=>{
        const val = response.data ? response.data.message : response.data.error;
        return val;});


    } catch (error) {
      console.error(
        "Error registering user:",
        error.response ? error.response.data.error : error.message
       
      ); 
      console.error(error.response , "hello", error,);
      //error is the structure response come from try
      //message come from catch
      setResponseMessage(()=>
      {const val = error.response.data.error;
      return val;}
      );
    }
    
  };

  return (
    <div>
      <Header />
      <OtherComponents search={false} />
      <Single
        
        first={
           <div className="signin-div-page">
            <form>
              <label className="signin-div-label" htmlFor="name">
                <span className="signin-div-label-span">Email</span>
                <input
                  id="name"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="signin-div-label-input-email"
                />
              </label>
              <label className="signin-div-label" htmlFor="password">
                <span className="signin-div-label-span">Password</span>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="signin-div-label-input-password"
                />
              </label>
              <span className="signin-forget-password">
                <a href="/contact">Forget Password?</a>
              </span>
              <button id="signin-div-button" type="submit" onClick={handleSubmit}>
                
                Submit
              </button>
            </form>
          </div>
          }
      
      />

      <p>{responseMessage}</p>
      <Footer />
    </div>
  );// response message is from backend
}

export default Signin;
