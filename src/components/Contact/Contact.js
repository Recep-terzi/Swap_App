import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Contact.Module.css";
import contact from "../../assets/contact.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_sl7gx4j",
      "template_sinu99p",
      e.target,
      "PpZTOFvtkDXZuH1A6"
    );
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };
  return (
    <>
      <Navbar />
      <div className="contact-container">
        <div className="row">
          <div className="col-md-6">
            <img src={contact} alt="contactimage" className="contact-image" />
          </div>
          <div className="col-md-6">
            <div className="contact-title">
              İletişim Formu
              <hr />
            </div>

            <form className="contact-input-div" onSubmit={sendEmail}>
              <input
                type="text"
                className="form-control"
                placeholder="İsim"
                autoComplete="off"
                value={name}
                name="name"
              />

              <input
                type="text"
                autoComplete="off"
                className="form-control"
                placeholder="Email Adresiniz"
                value={email}
                name="email"
              />
              <input
                type="text"
                className="form-control"
                autoComplete="off"
                placeholder="Konu"
                value={subject}
                name="subject"
              />
              <textarea
                type="text"
                className="form-control"
                name="message"
                value={message}
                autoComplete="off"
                placeholder="Mesajınız"
              />
              <button
                type="submit"
                className="btn btn-primary"
                value="Send Message"
              >
                Mail Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
