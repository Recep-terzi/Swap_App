import React from "react";
import "./ItemsDetail.Module.css";
import { useParams } from "react-router-dom";
const ItemsDetail = () => {
  const { id } = useParams();

  return <div className="detail-container">ItemsDetail - {id}</div>;
};

export default ItemsDetail;
