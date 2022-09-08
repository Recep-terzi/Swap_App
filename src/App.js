import { Routes, Route } from "react-router-dom";
import AddItem from "./components/AddItem/AddItem";
import Home from "./components/Home/Home";
import ItemsDetail from "./components/ItemsDetail/ItemsDetail";
import Login from "./components/Login/Login";
import Modal from "./components/Modal/Modal";
import Navbar from "./components/Navbar/Navbar";
import SignIn from "./components/SignIn/SignIn";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<ItemsDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/additem" element={<AddItem />} />
        <Route path="/modal" element={<Modal />} />
      </Routes>
    </>
  );
}

export default App;
