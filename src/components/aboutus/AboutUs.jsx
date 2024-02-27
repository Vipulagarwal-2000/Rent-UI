import React, {useContext} from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import OtherComponents from "../othercomponents/OtherComponent";
import Card from "../Card/Card";
import "./aboutus.css";
import { AuthContext } from "../../auth/AuthContext";


function AboutUs() {

const auth = useContext(AuthContext);
console.log(auth.isLoggedIn, "hi from about us");
 

    // Check the logInState and conditionally render content
    
      
        return (
        <div>
          <Header colorResponseAbout={true} />
          <OtherComponents search={false} />
          {(auth.isLoggedIn) &&
          <Card
            css="css1"
            mid={""}
            css2="css2"
            h1={<h2 className="about-us-h2">Mission</h2>}
            p={
              <div>
                <p className="about-us-para">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s.
                </p>
              </div>
            }
            h2={<h2 className="about-us-h2">Developer</h2>}
            p2={
              <div>
                <p className="about-us-para">Full Stack: Vipul Agarwal</p>
                <button id="about-us-button">Contribute</button>
              </div>
            }
          />
          }
           {!auth.isLoggedIn && <div className="NoRoute-div">
        <h1 className="NoRoute-css"> Not Accessible, Login to access it.</h1>
        </div>}
          
          <Footer />
        </div>
      );

    
   
  }

export default AboutUs;
