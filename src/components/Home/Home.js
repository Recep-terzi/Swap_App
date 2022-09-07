import React from "react";
import Items from "../Items/Items";
import "./Home.Module.css";
import clothes from "../../assets/clothes.png";
import swap from "../../assets/swap.png";
import Navbar from "../Navbar/Navbar";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="slider">
        <p>Welcome to Swap App!</p>
      </div>
      <div className="home-container">
        <div className="row home-row">
          <div className="col-md-7">
            <div className="home-title">Clothing Swap</div>
            <div className="home-description">Give your clothes a new life</div>
            <div className="home-description-other">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
              reprehenderit blanditiis, porro quae quidem, iusto animi
              aspernatur quam accusantium fugiat molestias quia possimus
              cupiditate recusandae voluptate voluptas tempora quaerat expedita!
              Similique minus neque, omnis architecto, in rerum laudantium quam
              porro inventore exercitationem illum ipsa tempore molestiae
              nesciunt pariatur! Ad, debitis.
            </div>
            <div className="home-btn">
              <button>Daha Fazla</button>
            </div>
          </div>
          <div className="col-md-5">
            <img src={clothes} alt="clothes-img"></img>
          </div>
        </div>{" "}
        <div className="row home-row">
          <div className="col-md-6">
            <img src={swap} alt="clothes-img"></img>
          </div>
          <div className="col-md-6">
            <div className="home-title">Item Swap</div>
            <div className="home-description">Give your items a new life</div>
            <div className="home-description-other">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
              reprehenderit blanditiis, porro quae quidem, iusto animi
              aspernatur quam accusantium fugiat molestias quia possimus
              cupiditate recusandae voluptate voluptas tempora quaerat expedita!
              Similique minus neque, omnis architecto, in rerum laudantium quam
              porro inventore exercitationem illum ipsa tempore molestiae
              nesciunt pariatur! Ad, debitis.
            </div>
            <div className="home-btn">
              <button>Daha Fazla</button>
            </div>
          </div>
        </div>
        <div className="items-container">
          <Items />
        </div>
      </div>
    </>
  );
};

export default Home;
