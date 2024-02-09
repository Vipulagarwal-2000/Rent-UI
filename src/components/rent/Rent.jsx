import React, { useState } from "react";
import axios from "axios";
import RentCard from "./rentcard";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Siin from "../small/Siin";
import Search from "../small/Search";
import Register from "../small/Register";


function Rent() {
  const [formData, setFormData] = useState({
    BookName: "",
    userId: "",
    DateFrom: "",
    DateTo:""
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
        const response = await axios.post("http://localhost:4000/api/rent", formData, {
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

    const handleAvilability = async (e) => {
      e.preventDefault();
      console.log(formData);
    
      try {
        const response = await axios.post("http://localhost:4000/api/available", formData, {
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
    <div>
      <Header />
      <Search />
      <Siin />
      <Register />
      <RentCard
        mid={""}

p2= {<div><p>Book Id </p><p>Gibrish</p></div>}
       
        p={
          <div>
            
              <label id="label" htmlFor="BookName">
                <span><p>Book Name</p></span>
                <span> <input
                  id="name"
                  type="text"
                  name="BookName"
                  value={formData.BookName}
                  onChange={handleChange}
                  required
                /></span>
              </label>

              <label id="label" htmlFor="userid">
              <span> <p>Renter User ID     </p>                                     
              </span>
              <span id="userid">  <input
                  type="text"
                  id="user"
                  name="userId"
                  value={formData.userId}
                  onChange={handleChange}
                  required
                /> </span>
              </label>

              <label id="label" htmlFor="DateFrom">
              <span> <p>Date From</p>  </span>
              <span> <input

                  type="Date"
                  id="DateFrom"
                  name="DateFrom"
                  value={formData.DateFrom}
                  onChange={handleChange}
                  required
                />  </span>
              </label>

              <label id="label" htmlFor="DateTo">  
              <span> <p>Date To</p></span>
              <span> <input
                  type="Date"
                  id="DateTo"
                  name="DateTo"
                  value={formData.DateTo}
                  onChange={handleChange}
                  required
                />  </span>
              </label>
              </div>  }
             

          button = { <div id="bl">
              <span id="first"><p>Check avilability and rent</p>
              <button id="button" type="submit" onClick={handleAvilability}>
                available
              </button>
              </span>

              <span id="second"><p>Rent Book</p>
              <button id="button" type="submit" onClick={handleSubmit}>
                rent
              </button>
              </span>
              </div>}
         
        

      />
      <p>{responseMessage}</p>
      <Footer />
    </div>
  );
}

export default Rent;
