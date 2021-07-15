import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function EditProfilePopup ({isOpen, onClose, onUpdateUser}) {

    const currentUser = React.useContext(CurrentUserContext);

    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    
    React.useEffect(() => {
        if (currentUser) {
            setName(currentUser.name);
            setDescription(currentUser.about);
            }
    }, [currentUser, isOpen]);

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeDescription(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        
        e.preventDefault();
    
        onUpdateUser({
          name,
          about: description,
        });
      }

    return (
        <PopupWithForm 
                  title='Редактировать профиль'
                  name='edit-profile'
                  button='Сохранить'
                  isOpen={isOpen}
                  onClose={onClose}
                  onSubmit={handleSubmit}
        >
                    <input className="form__input" type="text" value={name || ''} onChange={handleChangeName} name="username" id="username" minLength="2" maxLength="40" required />
                    <span className="form__input-error-message username-error"></span>
                    <input className="form__input" type="text" value={description || ''} onChange={handleChangeDescription} name="bio" id="bio" minLength="2" maxLength="200" required />
                    <span className="form__input-error-message bio-error"></span>
    </PopupWithForm>
    )
}