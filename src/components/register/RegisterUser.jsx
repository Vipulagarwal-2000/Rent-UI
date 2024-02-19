import React, { useState } from "react";
import axios from "axios";
import Single from "../singlecard/Single";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import OtherComponents from "../othercomponents/OtherComponent";

function RegisterUser() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
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
      const response = await axios.post(
        "http://localhost:4000/api/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setResponseMessage(response.data.message);
    } catch (error) {
      console.error(//error.message is the message present in the user register endpoint catch block.
        "Error registering user:",//data.error is the error present in the try block
        error.response ? error.response.data.error : error.message
      );
      console.log( "ETest:",
      error.response.data.error );//checking the error structure
      setResponseMessage(()=>{const val = error.response.data.error;
      return val;});
        
    }
  };

  return (
    <div>
      <Header />
      <OtherComponents search={false} register={false}/>
      <Single
      
        
        first={
          <div className="register-user-div">
          <p>{responseMessage}</p>
            <form>
              <label htmlFor="name" className="register-user-div-label">
                <span className="register-user-span">Email</span>
                <input
                  id="name"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="register-user-div-input-email"
                />
              </label>
              <label htmlFor="password" className="register-user-div-label">
                <span className="register-user-span">Password</span>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="register-user-div-input-password"
                />
              </label>
              <label htmlFor="confirmPassword" className="register-user-div-label">
                <span className="register-user-span ">Confirm Password</span>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="register-user-div-input-confirm-password"
                />
              </label>
              <button id="register-user-button" type="submit" onClick={handleSubmit}>
                Submit
              </button>
            </form>
          </div>
        }
        
      />
      
      <Footer />
    </div>
  );
}

export default RegisterUser;
