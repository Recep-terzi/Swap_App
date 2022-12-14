import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./UpdateItem.Module.css";
import { useNavigate, useParams } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../redux/swapSlice";
import Loading from "../Loading/Loading";
const UpdateItem = () => {
  const categories = ["Kıyafet", "Teknolojik Ürünler", "Diğer"];
  const { id } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const detail = useSelector((state) => state.swap.detail);
  const [newName, setNewName] = useState();
  const [newPrice, setNewPrice] = useState();
  const [newCategory, setNewCategory] = useState();
  const [newDescription, setNewDescription] = useState();
  const navigate = useNavigate();
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
      setNewName(detail[0].title);
      setNewPrice(detail[0].price);
      setNewCategory(detail[0].category);
      setNewDescription(detail[0].description);
    }, 2000);
  }, [detail]);

  const updateChange = (e) => {
    e.preventDefault();
    const ref = doc(db, "items", id);
    updateDoc(ref, {
      title: newName,
      price: newPrice,
      category: newCategory,
      description: newDescription,
    })
      .then((res) => {
        console.log("success");
        navigate("/products");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      {loading && (
        <>
          <Loading />
          <Navbar />
        </>
      )}
      {!loading && (
        <>
          <Navbar />
          <div className="updateitem-container">
            <div className="update-item-text">
              Ürününüzü güncellemek mi istiyorsunuz? Aşağıdan düzenlemeyi
              yapabilirsiniz. Bol kazançlar. İyi takaslar.
            </div>
          </div>
          {detail && (
            <>
              <form onSubmit={updateChange}>
                <div className="form-card">
                  <div className="update-item-img">
                    <img src={detail[0].image} alt="" />
                    <img src={detail[0].image2} alt="" />
                    <img src={detail[0].image3} alt="" />
                  </div>

                  <div className="title-input">
                    <p>Ürün Adı </p>
                    <input
                      type="text"
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                    />
                  </div>

                  <div className="price-input">
                    <p>Ürün Fiyatı </p>
                    <input
                      type="text"
                      value={newPrice}
                      onChange={(e) => setNewPrice(e.target.value)}
                    />
                  </div>
                  <div className="category-selection">
                    <p> Ürün Kategorisi </p>
                    <select
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value)}
                    >
                      {categories.map((category) => (
                        <option>{category}</option>
                      ))}
                    </select>
                  </div>
                  <div className="description-input">
                    <p>Ürün Açıklaması</p>
                    <textarea
                      value={newDescription}
                      onChange={(e) => setNewDescription(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="update-item-button">
                    <button type="submit">Güncelle</button>
                  </div>
                </div>
              </form>
            </>
          )}
          <Footer />
        </>
      )}
    </>
  );
};

export default UpdateItem;
