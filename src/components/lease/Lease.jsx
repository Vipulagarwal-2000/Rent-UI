import React, { useState } from "react";
import axios from "axios";
import RentCard from "../rent/rentcard";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Siin from "../small/Siin";
import Search from "../small/Search";
import Register from "../small/Register";


function Lease() {
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

  



    const handleLease = async (e) => {
      e.preventDefault();
      console.log(formData);
    
      try {
        const response = await axios.post("http://localhost:4000/api/lease", formData, {
          headers: {
            'Content-Type': 'application/json',  //important to write
          },
        });
        setResponseMessage(response.data.message);  //try it with putting it in try block
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

p2= {"Lease"}
       
        p={
          <div>
            
              <label id="label" htmlFor="BookName">
                <span><p>Book Name</p></span>
                <span> <input
                  id="name"  //sub component
                  type="text"
                  name="BookName"
                  value={formData.BookName}
                  onChange={handleChange}
                  required
                /></span>
              </label>

              <label id="label" htmlFor="userid">
              <span> <p>Leaser User ID     </p>                                     
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
              <span id="first">
              <button id="button" type="submit" onClick={handleLease}>
                lease
              </button>
              </span>

             
              
              </div>}
         
        

      />
      <p>{responseMessage}</p>
      <Footer />
    </div>
  );
}

export default Lease;
