import { TextField } from "@mui/material";
import React, { useState } from "react";
import "./Login.Module.css";
import clothes from "../../assets/clothes.png";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/swapSlice";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.swap.user);
  console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
          })
        );
      })
      // display the error if any
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                id="standard-basic"
                label="Şifre"
                variant="standard"
                className="sifreInput"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
