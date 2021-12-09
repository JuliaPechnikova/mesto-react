import trashButtonImage from '../images/trash-button-img.svg';
import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext.js';

function Card(props) {

  const card = props.card;

  function handleClick() {
    props.onCardClick(card);
  }

  function handleLikeClick() {
    props.onCardLike(card);
  }

  function handleDeleteClick() {
    props.onCardDelete(card);
  }

  const currentUser = React.useContext(CurrentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `${isOwn ? 'element__trash-btn_active' : ''}`
  );

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (
    `${isLiked ? 'element__button-heart_active' : ''}`
  );

  return(
    <li className="element">
      <img className="element__image" src={card.link} alt={card.name} onClick={handleClick}/>
      <button className={`element__trash-btn ${cardDeleteButtonClassName}`} type="reset" onClick={handleDeleteClick}>
        <img className="element__trash-btn-image" src={trashButtonImage} alt="Очистить"/>
      </button>
      <div className="element__caption">
        <h2 className="element__header">{card.name}</h2>
        <div>
          <button type="button" className={`element__button-heart ${cardLikeButtonClassName}`} onClick={handleLikeClick}></button>
          <p className="element__button-heart-counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;