import React, { useState } from "react";
import "./Comment.Module.css";
const Comment = () => {
  const [comment, setComment] = useState(["merhaba", "deneme"]);
  const [newComment, setNewComment] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setComment([...comment, newComment]);
  };
  return (
    <>
      <div className="comment-container">
        <div className="comment-main-title">Yorumlar</div>
        <form onSubmit={handleSubmit}>
          {comment.map((dat) => (
            <>
              <div className="comment-div">
                <div className="title-time-div">
                  <div className="comment-title">Güzel ürün</div>
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
          <div className="input-button-div">
            <h2>Haydi, sende yorum yap!</h2>
            <div className="input-div">
              <input
                type="text"
                placeholder="Yorum başlığı"
                value={newComment}
                className="comment--title"
                onChange={(e) => setNewComment(e.target.value)}
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
