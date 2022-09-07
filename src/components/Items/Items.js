/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import "./Items.Module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ReactStarsRating from "react-awesome-stars-rating";
import { useDispatch, useSelector } from "react-redux";
import { getItems, setPage } from "../../redux/swapSlice";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Items = () => {
  const items = useSelector((state) => state.swap.items);
  const dispatch = useDispatch();

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

      dispatch(getItems(result));
    });
  }, [dispatch]);
  console.log(items);
  return (
    <>
      <div className="items-div">
        {items && (
          <>
            {items.map((item) => (
              <>
                <Link to={`/detail/${item.id}`} className="card-link">
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
                </Link>
              </>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Items;
