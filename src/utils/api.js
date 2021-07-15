class Api {
    constructor({url, headers}) {
      this._url = url;
      this._headers = headers;
    }
  
    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`); 
        }
        return res.json();
      }
    
    getInitialCards() {
        return fetch(`${this._url}cards`, {
          headers: this._headers,
        })
          .then (this._getResponseData);
      }
  
    addNewCard(newPhotoName, newPhotoURL) {
        return fetch(`${this._url}cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({name: newPhotoName, link: newPhotoURL}),
          })
          .then (this._getResponseData);
      }

    deleteCard(id) {
        return fetch (`${this._url}cards/${id}`, {
            method: "DELETE",
            headers: this._headers,
            })
            .then (this._getResponseData);
        }  
        
    likeCard(id) {
        return fetch (`${this._url}cards/likes/${id}`, {
            method: "PUT",
            headers: this._headers,
            })
            .then (this._getResponseData);
        }

    dislikeCard(id) {
        return fetch (`${this._url}cards/likes/${id}`, {
            method: "DELETE",
            headers: this._headers,
            })
            .then (this._getResponseData);
        }
    
    updateAvatarPhoto (avatarURL) {
        return fetch (`${this._url}users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({avatar: avatarURL})
            })
            .then (this._getResponseData);

        }

    getUserData (data) {
        return fetch (`${this._url}users/me/`, {
            method: "GET",
            headers: this._headers,
            })
            .then (this._getResponseData);
        }

    updateUserData (newUsername, newBio) {
        return fetch (`${this._url}users/me/`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({name: newUsername, about: newBio})
            })
            .then (this._getResponseData);
        }

    getDataForPageRender() {
        return Promise.all([this.getInitialCards(), this.getUserData()])
    }

    getCardInfo (id) {
        return fetch (`${this._url}cards/likes/${id}`, {
            method: "GET",
            headers: this._headers,
            })
            .then (this._getResponseData);
        }
    }

    //Создаю экземляр класса Api 
    const api = new Api ({
        url: 'https://mesto.nomoreparties.co/v1/cohort-23/',
        headers: {
            authorization: 'a260d49c-522b-4bbd-9cd1-72740d17aa2a', 
            'Content-type': 'application/json',
        }
    })

    export default api 