import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import ImagePopup from './ImagePopup.js';
import PopupWithForm from './PopupWithForm.js';
import api from '../utils/Api.js';

import trashButtonImage from '../images/trash-button-img.svg';

function App() {

  const [user, setUser] =  React.useState(0);
  const [card, setCard] =  React.useState([]);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =  React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);


  // Cекция реализует открытие и закрытие попап
  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  }

  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  }

  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  }

  const closeAllPopups = () => {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  //Открытие попап с картинкой
  const handleCardClick = () => {
    //setSelectedCard(card._id);
  }


  //Читаем данные из запроса по API
  React.useEffect(() => {
    api.getAllInfo()
    .then(([cards, profileData]) => {
      //profileID = profileData._id;
      //userInfo.setUserInfo(profileData);
      //profilePhoto.setUserPhoto(profileData);
      //defaultCardList.renderItem(cards);
      setUser(profileData);
      setCard(cards);
    })
    .catch(err => console.log(`Ошибка инициализации данных: ${err}`));
  }, []);

  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main 
        onEditProfile = {handleEditProfileClick}
        onAddPlace = {handleAddPlaceClick}
        onEditAvatar = {handleEditAvatarClick}
        userName = {user.name}
        userDescription = {user.about}
        userAvatar = {user.avatar}
        cards = {card}
        onClickCard = {handleCardClick}
        />
        <Footer />
      </div>
      {/* <div className="popup popup_edit-profile">
        <div className="popup__container">
          <button className="popup__close-btn" type="reset">
            <img className="popup__close-btn-image" src={editFormImage} alt="X"/>
          </button>
          <h2 className="popup__header">Редактировать профиль</h2>
          <form className="popup__form" name="edit-profile" id="popup__form-editor" action="#" method="POST" noValidate>
            <input type="text" value="" placeholder="Имя" className="popup__input" id="username" name="name" minLength="2" maxLength="40" required/>
            <span id="username-error" className="popup__error"></span>
            <input type="text" value="" placeholder="О себе" className="popup__input" id="description" name="about" minLength="2" maxLength="200" required/>
            <span id="description-error" className="popup__error"></span>
            <button type="submit" className="popup__button popup__button-edit-profile popup__button_disabled">Сохранить</button>
          </form>
        </div>
      </div> */}
      <PopupWithForm name="edit-profile" title="Редактировать профиль" buttonTitle="Сохранить" theme="" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <input type="text" value="" placeholder="Имя" className="popup__input" id="username" 
          name="name" minLength="2" maxLength="40" required/>
        <span id="username-error" className="popup__error"></span>
        <input type="text" value="" placeholder="О себе" className="popup__input" id="description" 
          name="about" minLength="2" maxLength="200" required/>
        <span id="description-error" className="popup__error"></span>
      </PopupWithForm>
      {/* <div className="popup popup_edit-prifile-photo">
        <div className="popup__container">
          <button className="popup__close-btn" type="reset">
            <img className="popup__close-btn-image" src={editFormImage} alt="X"/>
          </button>
          <h2 className="popup__header">Обновить аватар</h2>
          <form className="popup__form" name="edit-profile-photo" id="popup__form-profile-photo" action="#" method="POST" noValidate>
            <input value="" placeholder="Ссылка на картинку" className="popup__input" id="avatar" name="avatar" type="url" required/>
            <span id="avatar-error" className="popup__error"></span>
            <button type="submit" className="popup__button popup__button-add-profile-photo popup__button_disabled">Сохранить</button>
          </form>
        </div>
      </div> */}
      <PopupWithForm name="edit-prifile-photo" title="Обновить аватар" buttonTitle="Сохранить" theme="" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <input value="" placeholder="Ссылка на картинку" className="popup__input" id="avatar" name="avatar" type="url" required/>
        <span id="avatar-error" className="popup__error"></span>
      </PopupWithForm>
      {/* <div className="popup popup_add-card">
        <div className="popup__container">
          <button className="popup__close-btn" type="reset">
            <img className="popup__close-btn-image" src={editFormImage} alt="X"/>
          </button>
          <h2 className="popup__header">Новое место</h2>
          <form className="popup__form" name="edit-place" id="popup__form-card" action="#" method="POST" noValidate>
            <input type="text" value="" placeholder="Название" className="popup__input" id="photoname" name="name" minLength="2" maxLength="30" required/>
            <span id="photoname-error" className="popup__error"></span>
            <input value="" placeholder="Ссылка на картинку" className="popup__input" id="link" name="link" type="url" required/>
            <span id="link-error" className="popup__error"></span>
            <button type="submit" className="popup__button popup__button-add-card popup__button_disabled">Сохранить</button>
          </form>
        </div>
      </div> */}
      <PopupWithForm name="add-card" title="Новое место" buttonTitle="Сохранить" theme="" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <input type="text" value="" placeholder="Название" className="popup__input" id="photoname" name="name" minLength="2" maxLength="30" required/>
        <span id="photoname-error" className="popup__error"></span>
        <input value="" placeholder="Ссылка на картинку" className="popup__input" id="link" name="link" type="url" required/>
        <span id="link-error" className="popup__error"></span>
      </PopupWithForm>
      {/* <div className="popup popup_delete-card">
        <div className="popup__container">
          <button className="popup__close-btn" type="reset">
            <img className="popup__close-btn-image" src={editFormImage} alt="X"/>
          </button>
          <h2 className="popup__header popup__header_theme_delete-card">Вы уверены?</h2>
          <form className="popup__form" name="delete-place" id="popup__delete-form-card" action="#" method="DELETE" noValidate>
            <button type="submit" className="popup__button popup__button_theme_delete-card popup__button-delete-card">Да</button>
          </form>
        </div>
      </div> */}
      <PopupWithForm name="add-card" title="Вы уверены?" buttonTitle="Да" theme="popup__button_theme_delete-card">
      </PopupWithForm>
      <ImagePopup selectedCard={card} onClose={closeAllPopups}/>
      {/* <template id="element-template">
        <li className="element">
          <img className="element__image" src="#" alt="Карточка"/>
          <button className="element__trash-btn" type="reset">
            <img className="element__trash-btn-image" src={trashButtonImage} alt="Очистить"/>
          </button>
          <div className="element__caption">
            <h2 className="element__header">#</h2>
            <div>
              <button type="button" className="element__button-heart"></button>
              <p className="element__button-heart-counter">1</p>
            </div>
          </div>
        </li>
      </template> */}
    </div>
  );
}


export default App;
