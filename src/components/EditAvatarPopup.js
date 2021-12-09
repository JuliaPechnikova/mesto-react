import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext.js';
import PopupWithForm from './PopupWithForm.js';

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const avatarRef = React.useRef("");
  const [avatar, setAvatar] = React.useState("");

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateAvatar({
      avatar: avatarRef.current.value
    });
  }

  function handleAvatarChange(e) {
    setAvatar(e.target.value);
  }

  // После загрузки текущего пользователя из API
  // его аватар будет использован в управляемых компонентах.
  React.useEffect(() => {
    setAvatar(currentUser.avatar);
  }, [currentUser, props.isOpen]); 


  return (
    <PopupWithForm name="edit-prifile-photo" title="Обновить аватар" buttonTitle="Сохранить" theme="" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
      <input value={avatar} placeholder="Ссылка на картинку" className="popup__input" 
      id="avatar" name="avatar" type="url" required onChange={handleAvatarChange} ref={avatarRef}/>
      <span id="avatar-error" className="popup__error"></span>
    </PopupWithForm>
  );
}
        
export default EditProfilePopup;