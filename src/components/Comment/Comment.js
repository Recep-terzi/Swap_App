import React, { useState } from "react";
import "./Comment.Module.css";
import { useParams } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useSelector } from "react-redux";
const Comment = () => {
  const { id } = useParams();
  const [newComment, setNewComment] = useState([]);
  const detail = useSelector((state) => state.swap.detail);
  const user = useSelector((state) => state.swap.user);
  const handleSubmit = (e) => {
    e.preventDefault();
    const ref = doc(db, "items", id);
    if (detail[0].comment) {
      updateDoc(ref, {
        comment: [...detail[0].comment, newComment],
      })
        .then((res) => {
          console.log("success");
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      updateDoc(ref, {
        comment: [newComment],
      })
        .then((res) => {
          console.log("success");
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  return (
    <>
      <div className="comment-container">
        <div className="comment-main-title">Yorumlar </div>
        <form onSubmit={handleSubmit}>
          {detail[0].comment ? (
            <>
              {detail[0].comment.map((det) => (
                <>
                  <div className="comment-div">
                    <div className="author-time-div">
                      {user && (
                        <div className="comment-author">{user.displayName}</div>
                      )}

                      <div className="comment-time">26.09.2022</div>
                    </div>
                    <div className="comment-description">{det}</div>
                  </div>
                </>
              ))}
            </>
          ) : (
            <h1>Yorum yok</h1>
          )}

          {user && (
            <div className="input-button-div">
              <h2>Haydi, sende yorum yap!</h2>
              <div className="input-div">
                <textarea
                  type="text"
                  placeholder="Yorum Açıklaması"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                />
              </div>
              <button type="submit">Yorumla !</button>
            </div>
          )}
          {!user && (
            <>
              <p className="comment-login-text">
                Yorum yapabilmek için lütfen giriş yapınız veya kayıt olunuz.
              </p>
            </>
          )}
        </form>
      </div>
    </>
  );
};

export default Comment;
