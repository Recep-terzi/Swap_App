/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import pyson from "../../assets/pyson.png";
import res from "../../assets/2.jpg";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import "./Items.Module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
const Items = () => {
  const [items, setItems] = useState();
  useEffect(() => {
    const ref = collection(db, "items");
    getDocs(ref).then((snap) => {
      let result = [];

      snap.forEach((doc) => {
        result.push({
          ...doc.data(),
          id: doc.id,
        });
      });

      setItems(result);
    });
  }, []);
  return (
    <>
      <div className="cards">
        <img src={pyson} alt="" />
        <div className="cards-body">
          <div className="cards-title">
            <p>Sahibinden çok temiz kullanışmış Asus Gaming Laptop</p>
            <p> 3000 TL </p>
          </div>
          <div className="cards-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            aliquam quia fuga quo! Minus facere architecto, unde ad ea eligendi
            reprehenderit atque. Beatae quisquam voluptatibus repellat id ipsa
            quam neque. Dolore quidem ea ducimus suscipit dignissimos blanditiis
            totam vel excepturi quos praesentium, officiis esse hic animi quam
            error possimus eius.
          </div>
        </div>
      </div>
      <div className="cards">
        <img src={pyson} alt="" />
        <div className="cards-body">
          <div className="cards-title">
            <p>Sahibinden çok temiz kullanışmış Asus Gaming Laptop</p>
            <p> 3000 TL </p>
          </div>
          <div className="cards-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            aliquam quia fuga quo! Minus facere architecto, unde ad ea eligendi
            reprehenderit atque. Beatae quisquam voluptatibus repellat id ipsa
            quam neque. Dolore quidem ea ducimus suscipit dignissimos blanditiis
            totam vel excepturi quos praesentium, officiis esse hic animi quam
            error possimus eius.
          </div>
        </div>
      </div>
      <div className="items-card">
        <div className="card">
          <div className="card-header">
            <img src={pyson} alt="" className="card-img" />
          </div>
          <div className="card-body">asd</div>
        </div>
        <div className="card">
          <div className="card-header">
            <img src={pyson} alt="" className="card-img" />
          </div>
          <div className="card-body">asd</div>
        </div>
        <div className="card">
          <div className="card-header">
            <img src={pyson} alt="" className="card-img" />
          </div>
          <div className="card-body">asd</div>
        </div>
        <div className="card">
          <div className="card-header">
            <img src={pyson} alt="" className="card-img" />
          </div>
          <div className="card-body">asd</div>
        </div>
        <div className="card">
          <div className="card-header">
            <img src={pyson} alt="" className="card-img" />
          </div>
          <div className="card-body">asd</div>
        </div>
        <div className="card">
          <div className="card-header">
            <img src={pyson} alt="" className="card-img" />
          </div>
          <div className="card-body">asd</div>
        </div>
        <div className="card">
          <div className="card-header">
            <img src={pyson} alt="" className="card-img" />
          </div>
          <div className="card-body">asd</div>
        </div>
      </div>
    </>
  );
};

export default Items;
