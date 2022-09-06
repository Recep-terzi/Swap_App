/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import pyson from "../../assets/pyson.png";
import notebook from "../../assets/notebook.jpg";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import "./Items.Module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import ReactStarsRating from "react-awesome-stars-rating";
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
      <div className="items-div">
        {items && (
          <>
            {items.map((item) => (
              <>
                <div className="card">
                  <div className="card-header">
                    <img src={item.first_image} alt="" className="card-img" />
                  </div>
                  <div className="card-body">
                    <div className="card-titles">{item.title}</div>
                    <div className="card-description">{item.description}</div>
                    <ReactStarsRating
                      value={item.star}
                      isEdit={false}
                      size={15}
                    />
                    <div className="card-price">{item.price} TL</div>
                  </div>
                </div>
              </>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Items;
