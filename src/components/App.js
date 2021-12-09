import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import ImagePopup from './ImagePopup.js';
import PopupWithForm from './PopupWithForm.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import EditPlacePopup from './AddPlacePopup.js';
import DeleteCardConfirmation from './DeleteCardConfirmation.js';
import CurrentUserContext from '../contexts/CurrentUserContext.js';
import api from '../utils/Api.js';

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =  React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isDeleteCardPopupOpen, setDeleteCardPopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({name: '', link: ''});
  
  const [currentUser, setCurrentUser] = React.useState({name: '', avatar: '', about: ''});
  const [cards, setCards] = React.useState([]);

  //Читаем данные из запроса по API
  React.useEffect(() => {
    api.getAllInfo()
    .then(([cards, profileData]) => {
      setCurrentUser(profileData);
      setCards(cards);
    })
    .catch(err => console.log(`Ошибка инициализации данных: ${err}`));
  }, []);

  // Cекция реализует открытие и закрытие попап форм

  function handleCardLike(card) {
    // Проверяем, есть ли уже лайк на карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    if (isLiked === false) {
      api.putCardLikes(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch(err => console.log(`Ошибка добавления лайка: ${err}`));
      ;
    }
    else {
      api.deleteCardLikes(card._id, isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch(err => console.log(`Ошибка удаления лайка: ${err}`));
    }
  }


  function handleCardDelete(card) {
    const isOwn = card.owner._id === currentUser._id;
    
    if (isOwn === true) {
      api.deleteCard(card._id, isOwn)
      .then(() => {
        setCards(cards.filter((c) => c !== card));
      });
    }
  }

  function handleUpdateUser(currentUser){
    // saveMessage (formEditor, 'Сохранение...');
    api.setUserProfile(currentUser.name, currentUser.about)
    .then((profileData) => {
      setCurrentUser(profileData);
      closeAllPopups();
    })
    .catch(err => console.log(`Ошибка изменения параметров профиля: ${err}`))
    // .finally(() => {
    //   saveMessage(formEditor, 'Сохранить');
    // });
  }

  function handleUpdateAvatar(currentUser){
    // saveMessage (formPhotoEditor, 'Сохранение...');
    api.setUserAvatar(currentUser.avatar)
    .then((profileData) => {
      setCurrentUser(profileData);
      closeAllPopups();
    })
    .catch(err => console.log(`Ошибка изменения аватара: ${err}`))
    // .finally(() => {
    //   saveMessage(formPhotoEditor, 'Сохранить');
    // });
  }

  function handleAddPlaceSubmit(card){
    // saveMessage (formCard, 'Сохранение...');
    api.setCard(card.link, card.name)
    .then((newCard) => {
      setCards([newCard, ...cards]);
      closeAllPopups();
    })
    .catch(err => console.log(`Ошибка создания карточки: ${err}`))
    // .finally(() => {
    //   saveMessage(formCard, 'Сохранить');
    // });
  }

  function saveMessage(savingForm, showMessage) {
    savingForm.querySelector('.popup__button').textContent = showMessage;
  }

  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  }

  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  }

  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  }

  const handleDeleteCardClick = () => {
    setDeleteCardPopupOpen(true);
  }

  const closeAllPopups = () => {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setDeleteCardPopupOpen(false);
    setSelectedCard({name: '', link: ''});
  }

  //Открытие попап с картинкой
  const handleCardClick = (card) => {
    setSelectedCard(card);
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="page">
          <Header />
          <Main 
          onEditProfile = {handleEditProfileClick}
          onAddPlace = {handleAddPlaceClick}
          onEditAvatar = {handleEditAvatarClick}
          onCardClick = {handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          cards={cards}
          onDeleteCardClick={handleDeleteCardClick}
          />
          <Footer />
        </div>
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/> 
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>
        <EditPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlaceSubmit={handleAddPlaceSubmit}/>
        <DeleteCardConfirmation isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlaceSubmit={handleAddPlaceSubmit}/>
        <ImagePopup selectedCard={selectedCard} onClose={closeAllPopups}/>
      </div>
    </CurrentUserContext.Provider>
  );
}


export default App;
