import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ItemsDetail from "./components/ItemsDetail/ItemsDetail";
import Login from "./components/Login/Login";
import Modal from "./components/Modal/Modal";
import SignIn from "./components/SignIn/SignIn";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./redux/swapSlice";
import { auth } from "./firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import MyProducts from "./components/MyProducts/MyProducts";
import Loading from "./components/Loading/Loading";
import Clothes from "./components/Clothes/Clothes";
import Technology from "./components/Technology/Technology";
import Other from "./components/Other/Other";
import UpdateItem from "./components/UpdateItem/UpdateItem";
import NotFound from "./components/NotFound/NotFound";
import Offer from "./components/Offer/Offer";
import Contact from "./components/Contact/Contact";
function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.swap.user);
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<ItemsDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/modal" element={<Modal />} />
          <Route path="/clothes" element={<Clothes />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/other" element={<Other />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/offer/:id" element={<Offer />} />

          {!user ? (
            <Route path="/*" element={<NotFound />} />
          ) : (
            <>
              <Route path="/products" element={<MyProducts />} />
              <Route path="/updateItem/:id" element={<UpdateItem />} />
            </>
          )}
        </Routes>
      )}
    </>
  );
}

export default App;
