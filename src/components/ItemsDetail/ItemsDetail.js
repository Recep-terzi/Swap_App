import React, { useEffect } from "react";
import "./ItemsDetail.Module.css";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../redux/swapSlice";
import { Carousel } from "react-responsive-carousel";
import ReactStarsRating from "react-awesome-stars-rating";
import notebook from "../../assets/notebook.jpg";
import Navbar from "../Navbar/Navbar";
const ItemsDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.swap.detail);
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
  console.log(detail);

  return (
    <>
      <Navbar />
      <div className="detail-container">
        {detail && (
          <>
            {detail.map((info) => (
              <div className="row">
                <div className="col-md-6">
                  {/* {info.image.map((img, index) => (
              <div key={index} className="carousel-img">
                <img src={img} alt="img" />
              </div>
            ))}{" "} */}
                  {/* <ImageGallery items={info.image} /> */}
                  {
                    /* <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={125}
              totalSlides={3}
            >
              <Slider>
                {info.image.map((img, index) => (
                  <Slide index={index}>
                    <img src={img} alt="img"></img>
                  </Slide>
                ))}
              </Slider>
              <ButtonBack>Back</ButtonBack>
              <ButtonNext>Next</ButtonNext>
            </CarouselProvider> */
                    // info.image.map((img, index) => (
                    // ))
                  }
                  <img
                    src={notebook}
                    alt="notebook"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50px",
                      padding: "40px",
                    }}
                  ></img>
                </div>
                <div className="col-md-6">
                  <div className="info-div">
                    <div className="info-title">{info.title}</div>
                    <div className="info-description">{info.description}</div>
                    <div className="info-star">
                      <ReactStarsRating
                        value={info.star}
                        isEdit={false}
                        size={15}
                      />{" "}
                      <span>{info.star}</span>
                    </div>
                    <div className="info-price">
                      {info.price} <span>TL</span>
                    </div>
                    <div className="info-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Minima esse quisquam doloremque eos ipsam. Explicabo
                      itaque tempore in voluptates magnam quam minima est
                      suscipit quasi quis debitis quas earum, nesciunt incidunt
                      eveniet. Dolorem ratione aspernatur in harum? Delectus,
                      ducimus? Veniam velit sed perspiciatis delectus laborum
                      repellat cupiditate, impedit in doloribus!
                    </div>
                    <div className="info-button">
                      <button className="teklifBtn"> Teklif Ver </button>
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
  );
};

export default ItemsDetail;
