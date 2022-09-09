import React, { useState } from "react";
import "./AddItem.Module.css";
import { db } from "../../firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const AddItem = () => {
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [star, setStar] = useState();
  const [image, setImage] = useState();
  const [image2, setImage2] = useState();
  const [image3, setImage3] = useState();
  const [description, setDescription] = useState();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.swap.auth);
  console.log(auth);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const doc = {
      title: title,
      price: price,
      image: image,
      image2: image2,
      image3: image3,
      star: star,
      description: description,
    };
    const ref = collection(db, "items");
    try {
      await addDoc(ref, {
        ...doc,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="additem-div">
        <form onSubmit={handleSubmit}>
          <div className="additem-title">Welcome to, add item page!</div>
          <div className="additem-item-title">
            <span>İtem Title</span>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="additem-item-title">
            <span>İtem Price</span>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="additem-item-title">
            <span>İtem Star</span>
            <input
              type="number"
              max={5}
              min={0}
              value={star}
              onChange={(e) => setStar(e.target.value)}
            />
          </div>
          <div className="additem-item-image">
            <span>İtem İmage</span>
            <div className="row">
              <div className="col-md-4">
                <span>Resim 1</span>
                <input
                  type="text"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
              <div className="col-md-4">
                <span>Resim 2</span>
                <input
                  type="text"
                  value={image2}
                  onChange={(e) => setImage2(e.target.value)}
                />
              </div>
              <div className="col-md-4">
                <span>Resim 3</span>
                <input
                  type="text"
                  value={image3}
                  onChange={(e) => setImage3(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="additem-item-title">
            <span>İtem Description</span>
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="additem-button">
            <button type="submit"> İlana koy! </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddItem;
