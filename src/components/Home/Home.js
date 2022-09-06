import React from "react";
import Items from "../Items/Items";
import "./Home.Module.css";
const Home = () => {
  return (
    <>
      <div className="slider">
        <p>Welcome to Swap App!</p>
      </div>
      <div className="home-container">
        <Items />
      </div>
    </>
  );
};

export default Home;
