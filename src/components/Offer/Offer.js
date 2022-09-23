import Navbar from "../Navbar/Navbar";
import "./Offer.Module.css";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loading from "../Loading/Loading";
import Footer from "../Footer/Footer";
import { db, storage } from "../../firebase/config";
import { addDoc, collection } from "firebase/firestore";
import "alertifyjs/build/css/alertify.css";
import alertify from "alertifyjs";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { getDownloadURL, uploadBytes, ref } from "firebase/storage";

const Offer = () => {
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [offerTitle, setOfferTitle] = useState();
  const [offerPrice, setOfferPrice] = useState();
  const [offerDescription, setOfferDescription] = useState();
  const detail = useSelector((state) => state.swap.detail);
  console.log(detail);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const doc = {
      title: offerTitle,
      price: offerPrice,
      image: image,
      image2: image2,
      image3: image3,
      description: offerDescription,
      item_title: detail[0].title,
      item_price: detail[0].price,
      item_description: detail[0].description,
      item_email: detail[0].email,
    };
    const ref = collection(db, "sellerItem");
    try {
      await addDoc(ref, {
        ...doc,
      });

      alertify.success("Teklifiniz kullanıcıya iletildi. İyi takaslar :)");
      console.log("eklendi");
    } catch (error) {
      console.log(error);
    }
  };
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
                  <form onSubmit={handleSubmit}>
                    <div className="offer-title">
                      Teklif edilen ürün adı:
                      <input
                        type="text"
                        value={offerTitle}
                        onChange={(e) => setOfferTitle(e.target.value)}
                      />
                    </div>
                    <div className="offer-price">
                      Teklif edilen ürün fiyatı:
                      <input
                        type="text"
                        value={offerPrice}
                        onChange={(e) => setOfferPrice(e.target.value)}
                      />
                    </div>
                    <div className="offer-description">
                      Teklif edilen ürün detayları:
                      <input
                        type="text"
                        value={offerDescription}
                        onChange={(e) => setOfferDescription(e.target.value)}
                      />
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
                          value={""}
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
                          value={""}
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
                          value={""}
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
                    <button className="offer-button" type="submit">
                      Teklif Ver
                    </button>
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
