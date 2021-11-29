import avatarEditButton from '../images/avatar-edit-button.svg';
import profileEditButton from '../images/profile-edit-button.svg';
import profileAddButton from '../images/profile-add-button.svg';
import Card from './Card.js';

function Main(props) {

  return (
    <main className="content">
    <section className="profile">
      <div className="profile__user">
        <div className="profile__avatar-cover">
          <img className="profile__add-photo-button" src={avatarEditButton} alt="Редактировать" 
          onClick={props.onEditAvatar} />
          <img className="profile__avatar" src={props.userAvatar} alt="Аватар"/>
        </div>
        <div className="profile__info">
          <div className="profile__info-edit">
            <h1 className="profile__name">{props.userName}</h1>
            <button type="button" className="profile__edit-button" 
            onClick={props.onEditProfile}>
              <img className="profile__edit-button-image" src={profileEditButton} alt="Редактировать"/>
            </button>
          </div>
          <p className="profile__description">{props.userDescription}</p>
        </div>
      </div>
      <button type="button" className="profile__add-button" onClick={props.onAddPlace}>
        <img className="profile__add-button-cross" src={profileAddButton} alt="+"/>
      </button>
    </section>

    <section>
      <ul className="elements"> 
        {props.cards.map(card =>
          <Card card={card} onCardClick={props.onCardClick}/>
        )}
      </ul>
    </section>
    </main>
  );
}

export default Main;
