import React, { useEffect } from "react";
import "./Other.Module.css";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import {
  collection,
  onSnapshot,
  orderBy,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebase/config";
import { getOtherItems } from "../../redux/swapSlice";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
const Other = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.swap.otherItems);
  console.log(items);
  useEffect(() => {
    const ref = collection(db, "items");
    const q = query(ref, where("category", "==", "Diğer"));
    const unsub = onSnapshot(q, (snap) => {
      dispatch(
        getOtherItems(
          snap.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        )
      );
    });
    return unsub;
  }, [dispatch]);
  return (
    <>
      <Navbar />

      <div className="other-container">
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
                        <div className="card-description">
                          {item.description}
                        </div>

                        <div className="card-price">{item.price} TL</div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </>
          )}
        </div>
        {items.length === 0 && (
          <div className="err">
            <h1>Bu kategoride bir ürün bulunmamaktadır.</h1>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Other;
