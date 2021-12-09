import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext.js';
import PopupWithForm from './PopupWithForm.js';

function DeleteCardConfirmation(props) {

  return (
  <PopupWithForm name="add-card" title="Вы уверены?" buttonTitle="Да" theme="popup__button_theme_delete-card">
  </PopupWithForm>

  );
}
        
export default DeleteCardConfirmation;