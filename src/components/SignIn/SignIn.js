import React, { useState } from "react";
import "./SignIn.Module.css";
import swap from "../../assets/swap.png";
import { Link, useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";

const SignIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [checkPassword, setCheckPassword] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        navigate("/login");
      })
      .catch((err) => setError(err.message));
    setEmail("");
    setPassword("");
    setCheckPassword("");
  };

  return (
    <div className="signin-container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6 border-img">
            <img src={swap} className="signin-img" alt="signin-img"></img>
          </div>
          <div className="col-md-6">
            <div className="signin-title">Kayıt Ol</div>
            <div className="signin-input">
              <TextField
                id="standard-basic"
                label="Email Adresi"
                required
                variant="standard"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="emailInput"
              />
              <TextField
                id="standard-basic"
                required
                autoComplete="off"
                label="Şifre"
                variant="standard"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="sifreInput"
              />
              <TextField
                id="standard-basic"
                label="Tekrar Şifre"
                variant="standard"
                autoComplete="off"
                required
                value={checkPassword}
                type="password"
                onChange={(e) => setCheckPassword(e.target.value)}
                className="repeatSifreInput"
              />
            </div>
            <div className="signin-input">
              {password !== checkPassword && (
                <p className="checkPassword"> Şifreler Uyuşmamaktadır.</p>
              )}

              <button
                type="submit"
                className="signin-btn"
                disabled={password !== checkPassword}
              >
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
