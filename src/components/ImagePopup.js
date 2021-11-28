import editFormImage from '../images/edit-form-image.svg';

function ImagePopup() {
  return (
    <div className="popup popup_opacity popup_full-photo">
    <div>
      <img className="popup__photo" src="#" alt="Картинка"/>
      <p className="popup__photo-caption"></p>
      <button className="popup__close-btn popup__close-btn_photo" type="reset">
        <img className="popup__close-btn-image popup__close-btn-image_photo" src={editFormImage} alt="X"/>
      </button>
    </div>
    </div>
  );
}

export default ImagePopup;
