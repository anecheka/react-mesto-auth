import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function AddPlacePopup ({isOpen, onClose, onAddPlace}) {

    const locationNameInput = React.useRef();
    const photoUrlInput = React.useRef();

    function handleSubmit(e) {

        e.preventDefault();
        onAddPlace({
          name: locationNameInput.current.value,
          link: photoUrlInput.current.value,
        }, resetForm);
      }

    
    function resetForm() {
        locationNameInput.current.value = ''
        photoUrlInput.current.value = ''
    }

    return (
        <PopupWithForm
                title='Новое место'
                name='add-photo'
                button='Создать'
                isOpen={isOpen}
                onClose={onClose}
                onSubmit={handleSubmit}
                >
                        <input className="form__input" ref={locationNameInput} type="text" name="name" id="location-name" placeholder="Название" minLength="2" maxLength="30" required />
                        <span className="form__input-error-message location-name-error"></span>
                        <input className="form__input" ref={photoUrlInput} type="url" name="link" id="photo-url" placeholder="Ссылка на картинку" required />
                        <span className="form__input-error-message photo-url-error"></span>
        </PopupWithForm>
    )
}