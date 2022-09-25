import React, { useState } from "react";
import "./Comment.Module.css";
import { useParams } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useSelector } from "react-redux";
const Comment = () => {
  const [comment, setComment] = useState([]);
  const [comment2, setComment2] = useState([]);
  const [commentTitle, setCommentTitle] = useState([]);
  const { id } = useParams();
  const [newComment, setNewComment] = useState([]);
  const detail = useSelector((state) => state.swap.detail);
  const handleSubmit = (e) => {
    e.preventDefault();
    setComment([...comment, newComment]);
    setComment2([...comment2, commentTitle]);
    const ref = doc(db, "items", id);
    updateDoc(ref, {
      comment: [...comment, newComment, ...comment2, commentTitle],
    })
      .then((res) => {
        console.log("success");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <>
      <div className="comment-container">
        <div className="comment-main-title">Yorumlar</div>
        <form onSubmit={handleSubmit}>
          {detail[0].comment ? (
            <>
              {detail[0].comment.map((det) => (
                <>
                  <div className="comment-div">
                    <div className="title-time-div">
                      <div className="comment-title">{det}</div>
                      <div className="comment-time">25.09.2022</div>
                    </div>
                    <div className="comment-author">Pyson</div>
                    <div className="comment-description">
                      Satıcı anında teklifime dönüş yaptı. Ve üründen de çok
                      memnunum. Teşekkür ederim ilginiz için. Umarım daha sonra
                      tekrar görüşürüz.
                    </div>
                  </div>
                </>
              ))}
            </>
          ) : (
            <h1>Yok</h1>
          )}

          <div className="input-button-div">
            <h2>Haydi, sende yorum yap!</h2>
            <div className="input-div">
              <input
                type="text"
                placeholder="Yorum başlığı"
                value={commentTitle}
                className="comment--title"
                onChange={(e) => setCommentTitle(e.target.value)}
              />
              <textarea
                type="text"
                placeholder="Yorum Açıklaması"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
            </div>
            <button type="submit">Gönder</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Comment;
