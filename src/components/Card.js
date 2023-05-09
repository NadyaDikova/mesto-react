import React from "react";

function Card(props) {
  return (
    <div className="element">
      <img
        className="element__img"
        src={props.image}
        alt={props.title}
        onClick={() => props.onCardClick(props.card)}
      />
      <button className="element__delete" type="button"></button>
      <div className="element__caption">
        <h3 className="element__title">{props.title}</h3>
        <div className="element__like-container">
          <button className="element__like" type="button"></button>
          <span className="element__like-quantity">{props.likeCounter}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
