import React, { useState, useContext } from "react";
import axios from "axios";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./lease.css";
import OtherComponents from "../othercomponents/OtherComponent";

import { AuthContext } from "../../auth/AuthContext";

function Lease() {

  const auth = useContext(AuthContext);
console.log(auth.isLoggedIn, "hi from about us");




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

  const handleLease = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await axios.post(
        "http://localhost:4000/api/lease",
        formData,
        {
          headers: {
            "Content-Type": "application/json", //important to write
          },
        }
      );
      setResponseMessage(()=>{
        const val = response.data ? response.data.message : response.data.error;
        return val;}); //try it with putting it in try block
    } catch (error) {
      console.error(
        "Error registering user:",
        error.response ? error.response.data : error.message
      );
      setResponseMessage(()=>{const val = error.response.data.error;
        return val;});
    }
  };

  return (
    <div>
      <Header colorResponseLease = {true}/>
      <OtherComponents search={false} register={false}/>
      {(auth.isLoggedIn) &&
      <Card
        mid={""}
        css="lease-css1"
        h1={
         
          <div className="lease-page-form">
           <div class="single-div-message-lease-user">{responseMessage}</div>
            <label id="lease-page-card-label" htmlFor="BookName">
              <span className="lease-page-span">
                Book Name
              </span>
            
             
                <input
                  id="name" //sub component
                  type="text"
                  name="BookName"
                  value={formData.BookName}
                  onChange={handleChange}
                  required
                  className="lease-page-input-bookname"
                />
           
            </label>

            <label id="lease-page-card-label" htmlFor="userid">
              <span className="lease-page-span">
         
             Renter id 
              </span>
             
                <input
                  type="text"
                  id="user"
                  name="userId"
                  value={formData.userId}
                  onChange={handleChange}
                  required
                  className="lease-page-input-userid"
                />
             
            </label>

            <label id="lease-page-card-label" htmlFor="DateFrom">
              <span className="lease-page-span">
               
                Date From
              </span>
              
                <input
                  type="Date"
                  id="DateFrom"
                  name="DateFrom"
                  value={formData.DateFrom}
                  onChange={handleChange}
                  required
                  className="lease-page-input-datefrom"
                />
            </label>

            <label id="lease-page-card-label" htmlFor="DateTo">
              <span className="lease-page-span">
             
               Date To
              </span>
              
                <input
                  type="Date"
                  id="DateTo"
                  name="DateTo"
                  value={formData.DateTo}
                  onChange={handleChange}
                  required
                  className="lease-page-input-dateto"
                />
            </label>
          </div>
        }
        p={
          <div id="lease-page-div-second">
            
              <button id="lease-page-div-button-id" type="submit" onClick={handleLease}>
                lease
              </button>
           
          </div>
        }
        css2="lease-css2"
        h2={""}
        p2={""}
      />}
           {!auth.isLoggedIn && <div className="NoRoute-div">
        <h1 className="NoRoute-css"> Leaseing Not Accessible, without Sign in !!</h1>
        </div>}
     
      <Footer />
    </div>
  );
}

export default Lease;
