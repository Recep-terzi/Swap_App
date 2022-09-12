import { IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./Login.Module.css";
import clothes from "../../assets/clothes.png";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useDispatch, useSelector } from "react-redux";
import { login, setHidden } from "../../redux/swapSlice";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Loading from "../Loading/Loading";
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.swap.user);
  const hidden = useSelector((state) => state.swap.hidden);
  const navigate = useNavigate();
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
        navigate("/");
      })
      // display the error if any
      .catch((err) => {
        alert(err);
      });
  };
  const handleClickShowPassword = () => {
    if (!hidden) {
      dispatch(setHidden(true));
    } else {
      dispatch(setHidden(false));
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading && <Loading />}
      {!loading && (
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
                    type={hidden ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="Toggle Password"
                            onClick={handleClickShowPassword}
                            edge="end"
                          >
                            {hidden ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div className="login-input">
                  <button type="submit" className="login-btn">
                    {" "}
                    Giriş Yap
                  </button>
                </div>
                <div className="question">
                  Hesabın yok mu ? <Link to="/signin"> Kayıt ol </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
