import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ItemsDetail from "./components/ItemsDetail/ItemsDetail";
import Login from "./components/Login/Login";
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
      </Routes>
    </>
  );
}

export default App;
