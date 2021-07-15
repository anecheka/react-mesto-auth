import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function EditAvatarPopup ({isOpen, onClose, onUpdateAvatar}) {

    const avatarUrlInput = React.useRef();

    function handleSubmit(e) {

        e.preventDefault();
        onUpdateAvatar({
          avatar: avatarUrlInput.current.value,
        }, resetForm);
      }

    function resetForm() {
        avatarUrlInput.current.value = ''
    }
    

    return (
        <PopupWithForm 
            title='Обновить аватар'
            name='update-avatar-image'
            button='Сохранить' 
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            >
                <input className="form__input" ref={avatarUrlInput} type="url" name="link" id="avatar-image-url" placeholder="Ссылка на фотографию" required />
                <span className="form__input-error-message avatar-image-url-error"></span>  
        </PopupWithForm>
    )
}