import React, { useEffect } from "react";
import "./ItemsDetail.Module.css";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../redux/swapSlice";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
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
                <CarouselProvider
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
                </CarouselProvider>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ItemsDetail;
