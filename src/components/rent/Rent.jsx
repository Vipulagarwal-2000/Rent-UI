import React, { useState } from "react";
import axios from "axios";
import Single from "../singlecard/Single";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Siin from "../small/Siin";
import Search from "../small/Search";
import Register from "../small/Register";

function Rent() {
  const [formData, setFormData] = useState({
    nameOfBook: "",
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
        const response = await axios.post("http://localhost:4000/api/register", formData, {
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
      <Single
        mid={""}
        h1={""}
        p={
          <div>
          <label><p>Book Id Gibrish</p></label>
            <form>
              <label htmlFor="name">
                <p>Name Of Book</p>
                <input
                  id="name"
                  type="text"
                  name="BookName"
                  value={formData.nameOfBook}
                  onChange={handleChange}
                  required
                />
              </label>
              <label htmlFor="user">
                <p>User ID</p>
                <input
                  type="number"
                  id="user"
                  name="userid"
                  value={formData.userId}
                  onChange={handleChange}
                  required
                />
              </label>
              <label htmlFor="DateFrom">
                <p>Date From</p>
                <input
                  type="Date"
                  id="DateFrom"
                  name="DateFrom"
                  value={formData.DateFrom}
                  onChange={handleChange}
                  required
                />
              </label>
              <label htmlFor="DateTo">
                <p>Date From</p>
                <input
                  type="Date"
                  id="DateTo"
                  name="DateTo"
                  value={formData.DateTo}
                  onChange={handleChange}
                  required
                />
              </label>
              <div>
              <button id="button" type="submit" onClick={handleSubmit}>
                Submit
              </button>
              <button id="button" type="submit" onClick={handleSubmit}>
                Submit
              </button>
              </div>
            </form>
          </div>
        }
        button={""}
      />
      <p>{responseMessage}</p>
      <Footer />
    </div>
  );
}

export default Rent;
