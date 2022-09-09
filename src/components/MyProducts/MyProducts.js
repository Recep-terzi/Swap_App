import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./MyProducts.Module.css";
import {
  collection,
  onSnapshot,
  orderBy,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebase/config";
import { useDispatch, useSelector } from "react-redux";
import { getProductItems } from "../../redux/swapSlice";
import { Link } from "react-router-dom";
const MyProducts = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.swap.user);
  const items = useSelector((state) => state.swap.productItems);
  console.log(items);
  useEffect(() => {
    const ref = collection(db, "items");
    const q = query(ref, where("email", "==", user?.email));
    const unsub = onSnapshot(q, (snap) => {
      dispatch(
        getProductItems(
          snap.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        )
      );
    });
    return unsub;
  }, [dispatch, user]);
  return (
    <>
      <Navbar />
      <div className="product-container">
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
      </div>
      <Footer />
    </>
  );
};

export default MyProducts;
