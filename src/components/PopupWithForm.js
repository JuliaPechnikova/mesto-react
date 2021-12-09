import editFormImage from '../images/edit-form-image.svg';

//const disableButton = "popup__button_disabled"
const disableButton = "";

function PopupWithForm(props) {
  return (
    <div className={`popup popup_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
    <div className="popup__container">
      <button className="popup__close-btn" type="reset" onClick={props.onClose}>
        <img className="popup__close-btn-image" src={editFormImage} alt="X"/>
      </button>
      <h2 className="popup__header">{`${props.title}`}</h2>
      <form className="popup__form" name={`${props.name}`} id={`popup__form-${props.name}`} action="#" method="POST" onSubmit={props.onSubmit}>
        {props.children}
        <button type="submit" className={`popup__button popup__button-${props.name} ${props.theme} ${disableButton}`}>{`${props.buttonTitle}`}</button>
      </form>
    </div>
    </div>
  );
}

export default PopupWithForm;
