import { TextField } from "@mui/material";
import React from "react";
import "./Login.Module.css";
import clothes from "../../assets/clothes.png";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="login-container">
      <form>
        <div className="row">
          <div className="col-md-6 border-img">
            <img src={clothes} className="login-img" alt="login-img"></img>
          </div>
          <div className="col-md-6">
            <div className="login-title">Giriş Yap</div>
            <div className="login-input">
              <TextField
                id="standard-basic"
                label="Kullanıcı adı"
                variant="standard"
                className="kullaniciAdiInput"
              />
              <TextField
                id="standard-basic"
                label="Şifre"
                variant="standard"
                className="sifreInput"
              />
            </div>
            <div className="login-input">
              <button type="submit" className="login-btn">
                {" "}
                Giriş Yap
              </button>
            </div>
            <div className="question">
              Hesabın yok mu ? <Link to="/signin"> Giriş Yap </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
