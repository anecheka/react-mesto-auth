import React from 'react';

function ImagePopup({card, onClose}) {
    return (
        <div className={`popup popup_use_view-full-photo ${card && 'popup_is-opened'}`}>
            <div className="popup__full-photo-container">
                <img className="popup__full-photo" src={card?.link} alt={card?.name} />
                <p className="popup__full-photo-title">{card?.name}</p>
                <button type="button" className="close-icon" aria-label="Закрыть" onClick={onClose}></button>
            </div>
        </div>
    );
  }
  
  export default ImagePopup;