import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function AddPlacePopup ({isOpen, onClose, onAddPlace}) {


    const [locationName, setLocationName] = React.useState('');
    const [photoUrl, setPhotoUrl] = React.useState('');

    function handleChangeLocationName(e) {
      setLocationName(e.target.value);
    }

    function handleChangePhotoUrl(e) {
        setPhotoUrl(e.target.value);
    }

    function handleSubmit(e) {

        e.preventDefault();
        onAddPlace({
          name: locationName,
          link: photoUrl,
        }, resetForm);
      }

    
    function resetForm() {
        setLocationName('');
        setPhotoUrl('');
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
                        <input className="form__input" value={locationName || ''} onChange={handleChangeLocationName} type="text" name="name" id="location-name" placeholder="Название" minLength="2" maxLength="30" required />
                        <span className="form__input-error-message location-name-error"></span>
                        <input className="form__input" value={photoUrl || ''} onChange={handleChangePhotoUrl} type="url" name="link" id="photo-url" placeholder="Ссылка на картинку" required />
                        <span className="form__input-error-message photo-url-error"></span>
        </PopupWithForm>
    )
}