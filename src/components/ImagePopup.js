import editFormImage from '../images/edit-form-image.svg';

function ImagePopup(props) {

  return (
    <div className={`popup popup_opacity popup_full-photo ${props.selectedCard.link ? 'popup_opened' : ''}`}>
    <div>
      <img className="popup__photo" src={props.selectedCard.link} alt={props.selectedCard.name}/>
      <p className="popup__photo-caption">{props.selectedCard.name}</p>
      <button className="popup__close-btn popup__close-btn_photo" type="reset" onClick={props.onClose}>
        <img className="popup__close-btn-image popup__close-btn-image_photo" src={editFormImage} alt="X"/>
      </button>
    </div>
    </div>
  );
}

export default ImagePopup;
