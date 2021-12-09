import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext.js';
import PopupWithForm from './PopupWithForm.js';

function EditProfilePopup(props) {

  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const currentUser = React.useContext(CurrentUserContext);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]); 

  return (
    <PopupWithForm name="edit-profile" title="Редактировать профиль" buttonTitle="Сохранить" theme="" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
      <input type="text" value={name} placeholder="Имя" className="popup__input" id="username" 
        name="name" minLength="2" maxLength="40" required onChange={handleNameChange}/>
      <span id="username-error" className="popup__error"></span>
      <input type="text" value={description} placeholder="О себе" className="popup__input" id="description" 
        name="about" minLength="2" maxLength="200" required onChange={handleDescriptionChange}/>
      <span id="description-error" className="popup__error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;