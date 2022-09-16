import React from "react";
import Navbar from "../Navbar/Navbar";

import "./NotFound.Module.css";
const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="notfound-container">
        <p>Üzgünüm birşey bulamadım ... :(</p>
        <p>
          Bu ekranı görmek istemiyorsan lütfen anasayfa üzerinden giriş yapınız
          veya kayıt olunuz.
        </p>
      </div>
    </>
  );
};

export default NotFound;
