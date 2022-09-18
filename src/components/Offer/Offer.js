import Navbar from "../Navbar/Navbar";
import "./Offer.Module.css";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db, storage } from "../../firebase/config";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../redux/swapSlice";
import Loading from "../Loading/Loading";
import Footer from "../Footer/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { getDownloadURL, uploadBytes, ref } from "firebase/storage";

const Offer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const detail = useSelector((state) => state.swap.detail);
  console.log(image2);
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
                <div className="col-md-5.5 first-col-md-6">
                  <div className="offer-item-title">
                    <p>
                      Seçilen Ürün : <span>{item.title}</span>
                    </p>
                  </div>
                  <div className="offer-item-price">
                    <p>
                      Seçilen Ürün Fiyatı: <span>{item.price} TL</span>
                    </p>
                  </div>
                  <div className="offer-item-description">
                    <p>
                      Seçilen Ürün Detayları : <span>{item.description}</span>
                    </p>
                  </div>
                  <div className="offer-item-image">
                    <p>Seçilen Ürün Resimleri:</p>
                    <img src={item.image} alt="img"></img>
                    <img src={item.image2} alt="img"></img>
                    <img src={item.image3} alt="img"></img>
                  </div>
                </div>
                <div className="col-md-1">
                  <img
                    src="http://cdn.onlinewebfonts.com/svg/img_418607.png"
                    alt=""
                  />
                  <img
                    src="https://pixsector.com/cache/0688783e/avbf566659ab2bdf82f87.png"
                    alt=""
                  />
                </div>

                <div className="col-md-6 last-col-md-6">
                  <form>
                    <div className="offer-title">
                      Teklif edilen ürün adı:
                      <input type="text" />
                    </div>
                    <div className="offer-price">
                      Teklif edilen ürün fiyatı:
                      <input type="text" />
                    </div>
                    <div className="offer-description">
                      Teklif edilen ürün detayları:
                      <input type="text" />
                    </div>
                    <div className="offer-image">
                      Teklif edilen ürün resimleri:
                    </div>
                    <div className="offer-all-image">
                      <div className="offer-all-image1">
                        <label for="file-input">
                          {image ? (
                            <img src={`${image}`} alt="" />
                          ) : (
                            <img
                              src="https://icon-library.com/images/add-photo-icon/add-photo-icon-19.jpg"
                              alt=""
                            />
                          )}
                        </label>
                        <input
                          type="file"
                          id="file-input"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.currentTarget.files[0];
                            const imageRef = ref(
                              storage,
                              `photos/${file.name}`
                            );
                            uploadBytes(imageRef, file);
                            getDownloadURL(imageRef).then((url) => {
                              setImage(url);
                            });
                          }}
                        />
                      </div>
                      <div className="offer-all-image1">
                        <label for="file-input2">
                          {image2 ? (
                            <img src={`${image2}`} alt="" />
                          ) : (
                            <img
                              src="https://icon-library.com/images/add-photo-icon/add-photo-icon-19.jpg"
                              alt=""
                            />
                          )}
                        </label>
                        <input
                          type="file"
                          id="file-input2"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.currentTarget.files[0];
                            const imageRef = ref(
                              storage,
                              `photos/${file.name}`
                            );
                            uploadBytes(imageRef, file);
                            getDownloadURL(imageRef).then((url) => {
                              setImage2(url);
                            });
                          }}
                        />
                      </div>
                      <div className="offer-all-image1">
                        <label for="file-input3">
                          {image3 ? (
                            <img src={`${image3}`} alt="" />
                          ) : (
                            <img
                              src="https://icon-library.com/images/add-photo-icon/add-photo-icon-19.jpg"
                              alt=""
                            />
                          )}
                        </label>
                        <input
                          type="file"
                          id="file-input3"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.currentTarget.files[0];
                            const imageRef = ref(
                              storage,
                              `photos/${file.name}`
                            );
                            uploadBytes(imageRef, file);
                            getDownloadURL(imageRef).then((url) => {
                              setImage3(url);
                            });
                          }}
                        />
                      </div>
                    </div>
                    <button className="offer-button"> Teklif Ver </button>
                  </form>
                </div>
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
