import React, { useState } from "react";
import Black from "../../assets/image/heart-black.png";

import "./card.scss";

const Card = ({ icon, subtitle, date, day, title, amount }) => {
  const [isLiked, updateLike] = useState(false);

  const handleLike = () => {
    if (!isLiked) {
      updateLike(true);
    } else {
      updateLike(false);
    }
  };
  return (
    <div className="custom-card">
      <div>
        <div className="like-container">
          <div className="btn" onClick={handleLike} disabled={!isLiked}>
            <img src={Black} alt="" />
          </div>
        </div>
        <p>{isLiked ? "liked" : "disliked"} </p>
      </div>
      <img src={icon} alt="" />
      <h4>
        {title} <p>&#9733;0.16</p>
      </h4>
      <p>{subtitle}</p>
      <p>{date}</p>
      <h3>
        ${amount} <span>{day}</span>
      </h3>
    </div>
  );
};

export default Card;
