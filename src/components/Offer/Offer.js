import Navbar from "../Navbar/Navbar";
import "./Offer.Module.css";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../redux/swapSlice";
import Loading from "../Loading/Loading";
import Footer from "../Footer/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Offer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const detail = useSelector((state) => state.swap.detail);
  console.log(detail);
  useEffect(() => {
    const ref = doc(db, "items", id);
    const data = [];
    getDoc(ref).then((snap) => {
      if (snap.exists) {
        data.push(snap.data());
      } else {
        console.log("error");
      }
      dispatch(getDetail(data));
    });
  }, [dispatch, id]);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <>
          <Navbar />
          <div className="offer-container">
            {detail.map((item) => (
              <div className="row">
                <div className="col-md-6">
                  <div className="offer-title">
                    <p>
                      Seçilen Ürün : <span>{item.title}</span>
                    </p>
                  </div>
                  <div className="offer-price">
                    <p>
                      Seçilen Ürün Fiyatı: <span>{item.price} TL</span>
                    </p>
                  </div>
                  <div className="offer-description">
                    <p>
                      Seçilen Ürün Detayları : <span>{item.description}</span>
                    </p>
                  </div>
                  <div className="offer-image">
                    <p>Seçilen Ürün Resimleri:</p>
                    <img src={item.image} alt="img"></img>
                    <img src={item.image2} alt="img"></img>
                    <img src={item.image3} alt="img"></img>
                  </div>
                </div>
                <div className="col-md-6"></div>
              </div>
            ))}
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default Offer;
