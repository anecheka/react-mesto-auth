import React from 'react';
import fail from '../images/popup_verify-registration_fail.svg'; 
import ok from '../images/popup_verify-registration_ok.svg'; 

export default function InfoToolTip(props) {

    function SuccessVerificationMessage () {
        return (
            <div>
                <img src={ok} 
                alt="Иконка подтверждения регистрации" 
                className="popup__verification-icon" />
                <p className="popup__verification-message">Вы успешно зарегистрировались!</p>
                <button type="button" className="close-icon" aria-label="Закрыть" onClick={props.onClose}></button>
            </div>
        )
    }

    function FailVerificationMessage () {
        return (
            <div>
                <img src={fail} 
                alt="Иконка отказа в регистрации" 
                className="popup__verification-icon" />
                <p className="popup__verification-message">Что-то пошло не так! Попробуйте ещё раз.</p>
                <button type="button" className="close-icon" aria-label="Закрыть" onClick={props.onClose}></button>
            </div>
        )
    }

    return (
        <div className={`popup ${props.isOpen ? 'popup_is-opened': ''}`}>
            <div className="popup__content popup__content_use_verification-message">
            {props.isRegistered ?
            <SuccessVerificationMessage /> 
            : <FailVerificationMessage />}
            </div>
        </div>
        );
  }