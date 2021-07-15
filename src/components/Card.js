import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({card, onCardClick, onCardLike, onCardDislike, onCardDelete}) {
    
    const currentUser = React.useContext(CurrentUserContext);

    //Переменная, является ли текущий пользователь автором карточки
    const isOwn = card.owner._id === currentUser._id;
    
    //Класс для кнопки удаления карточки (Показываем кнопку удаления, если текущий пользователь, является автором карточки)
    const cardDeleteButtonClassName =
        `element__delete-button ${isOwn ? 'element__delete-button_visible' : ''}`;
    
    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Класс для кнопки лайка
    const cardLikeButtonClassName = (
        `element__like-button ${isLiked ? 'element__like-button_active' : ''}`
    ); 

    const handleCardClick = () => {
        onCardClick(card)
      };
    
    const handleLikeClick = () => {
        if (!isLiked) {onCardLike(card)} 
            else if (isLiked) {onCardDislike(card)}
      };

      const handleCardDelete = () => {
        onCardDelete(card)
      };
    
    return (
        <li className="element">
            <img className="element__photo" alt={card.name} src={card.link} onClick={handleCardClick}/>
            <button className={cardDeleteButtonClassName} aria-label="Удалить фотографию" onClick={handleCardDelete}></button>
            <div className="element__info">
                <h2 className="element__title">{card.name}</h2>
                <div className="element__like-counter">
                    <button className={cardLikeButtonClassName} aria-label="Отметить фотографию как понравившуюся" onClick={handleLikeClick}></button>
                    <p className="element__like-number">{card.likes.length}</p>
                </div>
            </div>
        </li>
    );
  }
  
  export default Card;