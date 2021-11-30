import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import ImagePopup from './ImagePopup.js';
import PopupWithForm from './PopupWithForm.js';

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =  React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({name: '', link: ''});

  // Cекция реализует открытие и закрытие попап форм

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
    setSelectedCard({name: '', link: ''});
  }

  //Открытие попап с картинкой
  const handleCardClick = (card) => {
    setSelectedCard(card);
  }

  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main 
        onEditProfile = {handleEditProfileClick}
        onAddPlace = {handleAddPlaceClick}
        onEditAvatar = {handleEditAvatarClick}
        onCardClick = {handleCardClick}
        />
        <Footer />
      </div>
      <PopupWithForm name="edit-profile" title="Редактировать профиль" buttonTitle="Сохранить" theme="" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <input type="text" defaultValue="" placeholder="Имя" className="popup__input" id="username" 
          name="name" minLength="2" maxLength="40" required/>
        <span id="username-error" className="popup__error"></span>
        <input type="text" defaultValue="" placeholder="О себе" className="popup__input" id="description" 
          name="about" minLength="2" maxLength="200" required/>
        <span id="description-error" className="popup__error"></span>
      </PopupWithForm>
      <PopupWithForm name="edit-prifile-photo" title="Обновить аватар" buttonTitle="Сохранить" theme="" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <input defaultValue="" placeholder="Ссылка на картинку" className="popup__input" id="avatar" name="avatar" type="url" required/>
        <span id="avatar-error" className="popup__error"></span>
      </PopupWithForm>
      <PopupWithForm name="add-card" title="Новое место" buttonTitle="Сохранить" theme="" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <input type="text" defaultValue="" placeholder="Название" className="popup__input" id="photoname" name="name" minLength="2" maxLength="30" required/>
        <span id="photoname-error" className="popup__error"></span>
        <input defaultValue="" placeholder="Ссылка на картинку" className="popup__input" id="link" name="link" type="url" required/>
        <span id="link-error" className="popup__error"></span>
      </PopupWithForm>
      <PopupWithForm name="add-card" title="Вы уверены?" buttonTitle="Да" theme="popup__button_theme_delete-card">
      </PopupWithForm>
      <ImagePopup selectedCard={selectedCard} onClose={closeAllPopups}/>
    </div>
  );
}


export default App;
