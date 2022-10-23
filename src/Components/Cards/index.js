import React from "react";

import "./card.scss";

const Card = ({icon,subtitle, date,day, title, amount }) => {
  return (
    <div className="custom-card">
      <img src={icon} alt=""/>
      <h4>{title} 0.7</h4>
      <p>{subtitle}</p>
      <p>{date}</p>
      <h3>${amount} <span>{day}</span></h3>
    </div>
  );
};

export default Card;
