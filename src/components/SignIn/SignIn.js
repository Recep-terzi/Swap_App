import React from "react";
import "./SignIn.Module.css";
import swap from "../../assets/swap.png";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";

const SignIn = () => {
  return (
    <div className="signin-container">
      <form>
        <div className="row">
          <div className="col-md-6 border-img">
            <img src={swap} className="signin-img" alt="signin-img"></img>
          </div>
          <div className="col-md-6">
            <div className="signin-title">Kayıt Ol</div>
            <div className="signin-input">
              <TextField
                id="standard-basic"
                label="Kullanıcı adı"
                variant="standard"
                className="kullaniciAdiInput"
              />
              <TextField
                id="standard-basic"
                label="Email Adresi"
                variant="standard"
                className="emailInput"
              />
              <TextField
                id="standard-basic"
                label="Şifre"
                variant="standard"
                className="sifreInput"
              />
              <TextField
                id="standard-basic"
                label="Tekrar Şifre"
                variant="standard"
                className="repeatSifreInput"
              />
            </div>
            <div className="signin-input">
              <button type="submit" className="signin-btn">
                {" "}
                Kayıt Ol
              </button>
            </div>
            <div className="question">
              Zaten bir hesabın var mı ? <Link to="/login"> Giriş Yap </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
