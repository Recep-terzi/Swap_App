import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./UpdateItem.Module.css";
import { Link, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../redux/swapSlice";
const UpdateItem = () => {
  const categories = ["Kıyafet", "Teknolojik Ürünler", "Diğer"];
  const { id } = useParams();
  const dispatch = useDispatch();
  //   const [loading, setLoading] = useState(true);
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
  //   useEffect(() => {
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 2000);
  //   }, []);

  return (
    <>
      <Navbar />
      <div className="updateitem-container">
        <div className="update-item-text">
          Ürününüzü güncellemek mi istiyorsunuz? Aşağıdan düzenlemeyi
          yapabilirsiniz. Bol kazançlar. İyi takaslar.
        </div>

        <form>
          <div className="form-card">
            <div className="update-item-img">
              <img src={detail[0].image} alt="" />
              <img src={detail[0].image2} alt="" />
              <img src={detail[0].image3} alt="" />
            </div>
            <div className="title-input">
              <label>Ürün Adı </label>
              <input type="text" value={detail[0].title} />
            </div>
            <div className="price-input">
              <label>Ürün Fiyatı </label>

              <input type="text" value={detail[0].price} />
            </div>
            <div className="category-selection">
              <label> Ürün Kategorisi </label>
              <select value={detail[0].category}>
                {categories.map((category) => (
                  <option>{category}</option>
                ))}
              </select>
            </div>
            <div className="description-input">
              <label>Ürün Açıklaması</label>
              <textarea value={detail[0].description}></textarea>
            </div>
            <div className="update-item-button">
              <button>Güncelle</button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default UpdateItem;
