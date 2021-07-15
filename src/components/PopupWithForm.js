import React from 'react';

export default function PopupWithForm(props) {

    return (
        <div className={`popup popup_use_${props.name} ${props.isOpen ? 'popup_is-opened': ''}`}>
        <div className="popup__content">
            <form className="form" name={`${props.name}`} onSubmit={props.onSubmit}>
                <h2 className="form__title">{`${props.title}`}</h2>
                <fieldset className="form__container">
                {props.children}
                <button type="submit" className="form__submit-button" id={`submit-${props.name}`}>{props.button}</button>
                </fieldset>
            </form>
            <button type="button" className="close-icon" aria-label="Закрыть"
            onClick={props.onClose}></button>
        </div>
    </div>
    );
  }