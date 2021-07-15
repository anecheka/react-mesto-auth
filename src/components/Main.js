import React from 'react';
// import api from '../utils/api'; 
import Card from './Card'
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick, onCardLike, onCardDislike, onCardDelete, cardArray}) {

  const currentUser = React.useContext(CurrentUserContext);

  return (
        <main className="content root__section-position">
            <div className="profile">
                <div className="profile__all-user-info">
                    <div className="profile__avatar">
                        <img src={currentUser.avatar} alt="Фотография профиля" className="profile__avatar-image" />
                        <div className="profile__avatar-edit-button" 
                            onClick={onEditAvatar}>
                        </div>
                    </div>
                    <div className="profile__info">
                        <div className="profile__username-editing">
                            <h1 className="profile__username">{currentUser.name}</h1>
                            <button type="button" id="edit-profile" className="profile__edit-button" aria-label="Редактировать профиль" onClick={onEditProfile}></button>
                        </div>
                        <p className="profile__bio">{currentUser.about}</p>
                    </div>
                </div>
                <button type="button" className="profile__add-button" id="add-element" aria-label="Добавить место" onClick={onAddPlace}></button>
            </div>
            <ul className="elements">
                {
                    cardArray.map((card) => 
                    (<Card key={card._id} card={card} onCardClick={onCardClick} onCardLike={onCardLike} onCardDislike={onCardDislike} onCardDelete={onCardDelete} />)
                    )
                }
            </ul>
        </main>
  );
}

export default Main;