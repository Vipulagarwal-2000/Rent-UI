import React, { useState } from "react";
import axios from "axios";
import RentCard from "./RentComponent/RentCard";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import OtherComponents from "../othercomponents/OtherComponent";

function Rent() {
  const [formData, setFormData] = useState({
    BookName: "",
    userId: "",
    DateFrom: "",
    DateTo: "",
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
        "http://localhost:4000/api/rent",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setResponseMessage(response.data.message);
    } catch (error) {
      console.error(
        "Error registering user:",
        error.response ? error.response.data : error.message
      );
      setResponseMessage(
        "Registration failed. Please check your inputs and try again."
      );
    }
  };

  const handleAvilability = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await axios.post(
        "http://localhost:4000/api/available",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setResponseMessage(response.data.message);
    } catch (error) {
      console.error(
        "Error registering user:",
        error.response ? error.response.data : error.message
      );
      setResponseMessage(
        "Registration failed. Please check your inputs and try again."
      );
    }
  };



  return (
    <div>
      <Header />
      <OtherComponents search={false}/>
      <RentCard
        first={
          <div className="single-rent-page-div-super">
            <div className="single-rent-page-div-one">
              <span className="single-rent-page-div-span">Book Id </span>
              <span className="single-rent-page-div-span-bookid">Gibrish</span>
            </div>
            <div className="single-rent-page-div-form">
              <label id="single-page-div-label" htmlFor="BookName">
                <span className="single-rent-page-div-span">Book Name</span>

                <input
                  id="name"
                  type="text"
                  name="BookName"
                  value={formData.BookName}
                  onChange={handleChange}
                  required
                  className="single-rent-page-div-input-name"
                />
              </label>

              <label id="single-page-div-label" htmlFor="userid">
                <span className="single-rent-page-div-span">Borrower id</span>

                <input
                  type="text"
                  id="user"
                  name="userId"
                  value={formData.userId}
                  onChange={handleChange}
                  required
                  className="single-rent-page-div-input-userid"
                />
              </label>

              <label id="single-page-div-label" htmlFor="DateFrom">
                <span className="single-rent-page-div-span">Date From</span>

                <input
                  type="Date"
                  id="DateFrom"
                  name="DateFrom"
                  value={formData.DateFrom}
                  onChange={handleChange}
                  required
                  className="single-rent-page-div-input-datefrom"
                />
              </label>

              <label id="single-page-div-label" htmlFor="DateTo">
                <span className="single-rent-page-div-span-dateto single-rent-page-div-span  ">
                  <p>Date to</p>
                </span>

                <input
                  type="Date"
                  id="DateTo"
                  name="DateTo"
                  value={formData.DateTo}
                  onChange={handleChange}
                  required
                  className="single-rent-page-div-input-dateto"
                />
              </label>
            </div>
          </div>
        }
        second={
          <div id="single-rent-page-second-div">
            <span id="first-span-rent-page">
              Check avilability and Rent of the given Book
              <button id="first-button-rent-page" type="submit" onClick={handleAvilability}>
                Available
              </button>
            </span>

            <span id="second-span-rent-page">
              Rent Book with a click
              <button id="second-button-rent-page" type="submit" onClick={handleSubmit}>
                Rent
              </button>
            </span>
          </div>
        }
      />
      <p>{responseMessage}</p>
      <Footer />
    </div>
  );
}

export default Rent;
