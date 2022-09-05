import React from "react";
import "./Home.Module.css";
import pyson from "../../assets/pyson.png";
const Home = () => {
  return (
    <>
      <div className="slider">
        <p>Welcome to Swap App!</p>
      </div>
      <div className="home-container">
        <div className="row">
          <div className="col-3">
            <div className="card">
              <div className="card-header">
                <img src={pyson} alt="" className="card-img" />
              </div>
              <div className="card-body">asd</div>
            </div>
          </div>{" "}
          <div className="col-3">
            <div className="card">
              <div className="card-header">
                <img src={pyson} alt="" className="card-img" />
              </div>
              <div className="card-body">asd</div>
            </div>
          </div>{" "}
          <div className="col-3">
            <div className="card">
              <div className="card-header">
                <img src={pyson} alt="" className="card-img" />
              </div>
              <div className="card-body">asd</div>
            </div>
          </div>{" "}
          <div className="col-3">
            <div className="card">
              <div className="card-header">
                <img src={pyson} alt="" className="card-img" />
              </div>
              <div className="card-body">asd</div>
            </div>
          </div>{" "}
          <div className="col-3">
            <div className="card">
              <div className="card-body">asd</div>
            </div>
          </div>{" "}
          <div className="col-3">
            <div className="card">
              <div className="card-body">asd</div>
            </div>
          </div>{" "}
          <div className="col-3">
            <div className="card">
              <div className="card-body">asd</div>
            </div>
          </div>{" "}
          <div className="col-3">
            <div className="card">
              <div className="card-body">asd</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
