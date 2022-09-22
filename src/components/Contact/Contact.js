import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Contact.Module.css";
import contact from "../../assets/contact.png";
const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact-container">
        <div className="row">
          <div className="col-md-6">
            <img src={contact} alt="contactimage" className="contact-image" />
          </div>
          <div className="col-md-6">asd</div>
        </div>
      </div>
    </>
  );
};

export default Contact;
