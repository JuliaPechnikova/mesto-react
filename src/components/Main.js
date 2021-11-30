import React, { StrictMode } from 'react';
import avatarEditButton from '../images/avatar-edit-button.svg';
import profileEditButton from '../images/profile-edit-button.svg';
import profileAddButton from '../images/profile-add-button.svg';
import Card from './Card.js';
import api from '../utils/Api.js';

function Main(props) {

  const [user, setUser] =  React.useState({name: '', avatar: '', about: ''});
  const [card, setCard] =  React.useState([]);

  let userAvatar = user.avatar;
  let userName = user.name;
  let userDescription = user.about;

  //Читаем данные из запроса по API
  React.useEffect(() => {
    api.getAllInfo()
    .then(([cards, profileData]) => {
      setUser(profileData);
      setCard(cards);
    })
    .catch(err => console.log(`Ошибка инициализации данных: ${err}`));
  }, []);
  
  return (
    <main className="content">
    <section className="profile">
      <div className="profile__user">
        <div className="profile__avatar-cover">
          <img className="profile__add-photo-button" src={avatarEditButton} alt="Редактировать" 
          onClick={props.onEditAvatar} />
          <img className="profile__avatar" src={userAvatar} alt="Аватар"/>
        </div>
        <div className="profile__info">
          <div className="profile__info-edit">
            <h1 className="profile__name">{userName}</h1>
            <button type="button" className="profile__edit-button" 
            onClick={props.onEditProfile}>
              <img className="profile__edit-button-image" src={profileEditButton} alt="Редактировать"/>
            </button>
          </div>
          <p className="profile__description">{userDescription}</p>
        </div>
      </div>
      <button type="button" className="profile__add-button" onClick={props.onAddPlace}>
        <img className="profile__add-button-cross" src={profileAddButton} alt="+"/>
      </button>
    </section>

    <section>
      <ul className="elements"> 
        {card.map(card =>
          <Card card={card} key={card._id} onCardClick={props.onCardClick}/>
        )}
      </ul>
    </section>
    </main>
  );
}

export default Main;
