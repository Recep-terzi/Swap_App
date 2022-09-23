import React, { useState, useEffect } from "react";
import "./SignIn.Module.css";
import swap from "../../assets/swap.png";
import { Link, useNavigate } from "react-router-dom";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/config";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setHidden } from "../../redux/swapSlice";
import Loading from "../Loading/Loading";
const SignIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [checkPassword, setCheckPassword] = useState();
  const [displayName, setDisplayName] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const hidden = useSelector((state) => state.swap.hidden);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        updateProfile(res.user, {
          displayName: displayName,
        });
        console.log(res);
        navigate("/");
      })
      .catch((err) => setError(err.message, error));
    setEmail("");
    setDisplayName("");
    setPassword("");
    setCheckPassword("");
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
                    label="Kullanıcı Adı"
                    required
                    variant="standard"
                    autoComplete="off"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    className="emailInput"
                  />
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
                    type={hidden ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                    className="sifreInput"
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
                  <TextField
                    id="standard-basic"
                    label="Tekrar Şifre"
                    variant="standard"
                    autoComplete="off"
                    required
                    value={checkPassword}
                    type={hidden ? "text" : "password"}
                    onChange={(e) => setCheckPassword(e.target.value)}
                    className="repeatSifreInput"
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
                  Zaten bir hesabın var mı ?{" "}
                  <Link to="/login"> Giriş Yap </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default SignIn;
