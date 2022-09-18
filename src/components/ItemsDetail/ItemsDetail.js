import React, { useEffect, useState } from "react";
import "./ItemsDetail.Module.css";
import { Link, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../redux/swapSlice";
import Navbar from "../Navbar/Navbar";
import Loading from "../Loading/Loading";
import Footer from "../Footer/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const ItemsDetail = () => {
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
          <div className="detail-container">
            {detail && (
              <>
                {detail.map((info) => (
                  <div className="row">
                    <div className="col-md-6">
                      {/* <img
                        src={info.image}
                        alt="notebook"
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "50px",
                          padding: "40px",
                        }}
                      ></img> */}

                      <Carousel className="main-slide">
                        <div>
                          <img src={info.image} alt="image1" />
                          <p className="legend">Legend 1</p>
                        </div>
                        <div>
                          <img src={info.image2} alt="image2" />
                          <p className="legend">Legend 2</p>
                        </div>
                        <div>
                          <img src={info.image3} alt="image3" />
                          <p className="legend">Legend 3</p>
                        </div>
                      </Carousel>
                    </div>
                    <div className="col-md-6">
                      <div className="info-div">
                        <div className="info-title">{info.title}</div>
                        <div className="items-info-div">
                          <div className="description-seller">
                            <div className="info-description">
                              {info.description}
                            </div>

                            <div className="info-seller">
                              <p>
                                Ürün satıcısı :{" "}
                                <span>
                                  <Link to="/">{info.seller}</Link>
                                </span>
                              </p>
                            </div>
                          </div>
                          <div className="price-div">
                            <div className="info-price">
                              {info.price} <span>TL</span>
                            </div>
                          </div>
                        </div>
                        <div className="info-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Minima esse quisquam doloremque eos ipsam.
                          Explicabo itaque tempore in voluptates magnam quam
                          minima est suscipit quasi quis debitis quas earum,
                          nesciunt incidunt eveniet. Dolorem ratione aspernatur
                          in harum? Delectus, ducimus? Veniam velit sed
                          perspiciatis delectus laborum repellat cupiditate,
                          impedit in doloribus!
                        </div>
                        <div className="info-button">
                          <Link to={`/offer/${id}`}>
                            <button className="teklifBtn"> Teklif Ver </button>
                          </Link>
                          <button className="satinAlBtn"> Satın Al </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </>
      )}
      <Footer />
    </>
  );
};

export default ItemsDetail;
