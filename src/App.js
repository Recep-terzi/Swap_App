import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ItemsDetail from "./components/ItemsDetail/ItemsDetail";
import Login from "./components/Login/Login";
import Modal from "./components/Modal/Modal";
import SignIn from "./components/SignIn/SignIn";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./redux/swapSlice";
import { auth } from "./firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import MyProducts from "./components/MyProducts/MyProducts";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // user is logged in, send the user's details to redux, store the current user in the state
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<ItemsDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/products" element={<MyProducts />} />
      </Routes>
    </>
  );
}

export default App;
