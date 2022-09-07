import React from "react";
import "./AddItem.Module.css";
const AddItem = () => {
  return (
    <>
      <div className="additem-div">
        <div className="additem-title">Welcome to, add item page!</div>
        <div className="additem-item-title">
          <span>İtem Title</span>
          <input type="text" />
        </div>
        <div className="additem-item-title">
          <span>İtem Price</span>
          <input type="text" />
        </div>
        <div className="additem-item-title">
          <span>İtem Star</span>
          <input type="number" max={5} min={0} />
        </div>
        <div className="additem-item-image">
          <span>İtem İmage</span>
          <div className="row">
            <div className="col-md-4">
              <span>Resim 1</span>
              <input type="text" />
            </div>
            <div className="col-md-4">
              <span>Resim 2</span>
              <input type="text" />
            </div>
            <div className="col-md-4">
              <span>Resim 3</span>
              <input type="text" />
            </div>
          </div>
        </div>

        <div className="additem-item-title">
          <span>İtem Description</span>
          <textarea name="" id="" cols="30" rows="5"></textarea>
        </div>
        <div className="additem-button">
          <button type="submit"> İlana koy! </button>
        </div>
      </div>
    </>
  );
};

export default AddItem;
