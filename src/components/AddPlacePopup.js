import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function AddPlacePopup(props) {

  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onAddPlaceSubmit({
      name,
      link
    });
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  React.useEffect(() => {
    setName("");
    setLink("");
  }, [props.isOpen]); 

  return (
    <PopupWithForm name="add-card" title="Новое место" buttonTitle="Сохранить" theme="" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
    <input type="text" value={name} placeholder="Название" className="popup__input" 
    id="photoname" name="name" minLength="2" maxLength="30" required onChange={handleNameChange}/>
    <span id="photoname-error" className="popup__error"></span>
    <input value={link} placeholder="Ссылка на картинку" className="popup__input" 
    id="link" name="link" type="url" required onChange={handleLinkChange}/>
    <span id="link-error" className="popup__error"></span>
  </PopupWithForm>
  );
}
        
export default AddPlacePopup;