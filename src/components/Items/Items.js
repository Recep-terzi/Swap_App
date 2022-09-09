/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from "react";

import {
  collection,
  onSnapshot,
  orderBy,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebase/config";
import "./Items.Module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../redux/swapSlice";
import { Link } from "react-router-dom";
const Items = () => {
  const items = useSelector((state) => state.swap.items);
  const user = useSelector((state) => state.swap.user);
  const dispatch = useDispatch();
  console.log(items);
  useEffect(() => {
    const ref = collection(db, "items");
    // const q = query(ref, where("email", "==", user?.email));

    // const unsub = onSnapshot(q, (snap) => {
    //   dispatch(
    //     getItems(
    //       snap.docs.map((doc) => ({
    //         ...doc.data(),
    //         id: doc.id,
    //       }))
    //     )
    //   );
    // });
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
    // return unsub;
  }, [dispatch]);
  return (
    <>
      <div className="items-div">
        {items && (
          <>
            {items.map((item) => (
              <div key={item.id}>
                <Link to={`/detail/${item.id}`} className="card-link">
                  <div className="card">
                    <div className="card-header">
                      <img src={item.image} alt="" className="card-img" />
                    </div>
                    <div className="card-body">
                      <div className="card-titles">{item.title}</div>
                      <div className="card-description">{item.description}</div>

                      <div className="card-price">{item.price} TL</div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Items;
