import trashButtonImage from '../images/trash-button-img.svg';
import React from 'react';

function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

  return(
    <li className="element">
      <img className="element__image" src={props.card.link} alt={props.card.name} onClick={handleClick}/>
      <button className="element__trash-btn" type="reset">
        <img className="element__trash-btn-image" src={trashButtonImage} alt="Очистить"/>
      </button>
      <div className="element__caption">
        <h2 className="element__header">{props.card.name}</h2>
        <div>
          <button type="button" className="element__button-heart"></button>
          <p className="element__button-heart-counter">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;