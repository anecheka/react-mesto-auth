import React from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Header from './Header'
import api from '../utils/api'; 
import Main from './Main'
import ImagePopup from './ImagePopup'
import Footer from './Footer'
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Register from './Register';
import Login from './Login';
import * as auth from '../utils/auth';
import InfoToolTip from './InfoToolTip';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [cards, setCards] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn ] = React.useState(false);
  const [userData, setUserData] = React.useState('');
  const [isRegisteredPopupOpen, setIsRegisteredPopupOpen] = React.useState(false);
  const [isRegistered, setIsRegistered] = React.useState(false);

  const history = useHistory();

  //Проверка токена в момент рендеринга приложения
  React.useEffect (() => {
    tokenCheck()
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  React.useEffect (() => {
    api.getUserData().then((user) => (
      setCurrentUser(user)
        ))
        .catch((err) => {
            console.log(err)
        })
    }, []);

    React.useEffect (() => {
      api.getInitialCards().then((data) => setCards(data))
              .catch((err) => {
                  console.log(err)
              })
      }, []);
  
  function handleEditProfileClick () {
    setIsEditProfilePopupOpen(true)
  }
  
  function handleAddPlaceClick () {
    setIsAddPlacePopupOpen(true)
  }

  function handleEditAvatarClick () {
    setIsEditAvatarPopupOpen(true)
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setSelectedCard(null)
    setIsRegisteredPopupOpen(false)
  }

  function handleCardLike(card) {
    //Проверка, есть ли у карточки лайк
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.likeCard(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c))
        }).catch((err) => {
          console.log(err)
          });
  }

  function handleCardDislike(card) {
    //Проверка, есть ли у карточки лайк
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.dislikeCard(card._id, isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c))
        }).catch((err) => {
          console.log(err)
          });
  }

  function handleCardDelete(card) {
   
    // Отправляем запрос в API на удаление карточки
      api.deleteCard(card._id).then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id))
          }).catch((err) => {
            console.log(err)
            });
  }

  function handleUpdateUser({name, about}) {

      api.updateUserData(name, about).then((res) => {
        setCurrentUser(user => ({...user, name, about }))
          }).then(() => setIsEditProfilePopupOpen(false)
            ).catch((err) => {
              console.log(err)
              });
  }

  function handleUpdateAvatar({avatar}, resetForm) {

    api.updateAvatarPhoto(avatar).then((res) => {
      setCurrentUser(user => ({...user, avatar}))
        }).then(() => setIsEditAvatarPopupOpen(false)
          ).then(()=> resetForm()
            ).catch((err) => {
              console.log(err)
              });
  }

  function handleAddPlaceSubmit ({name, link}, resetForm) {

    api.addNewCard(name, link).then((newCard) => {
      setCards([newCard, ...cards])
        }).then(() => setIsAddPlacePopupOpen(false)
          ).then(()=> resetForm()
            ).catch((err) => {
              console.log(err)
              });

  }

  function handleLogin ({email, password}){
    auth.authorize ({email, password})
    .then (data => {
      if (data.token) {
        localStorage.setItem('jwt', data.token);
        setUserData(email);
        setLoggedIn(true);
        history.push("/");
        }
    })
    .catch(err => console.log(err))
  }

  function tokenCheck () {
    const jwt = localStorage.getItem('jwt');

      if (jwt){
        
        auth.getContent(jwt)
        .then((res) => {
          if (res){
            setUserData (res.data.email);
            setLoggedIn(true);
            history.push("/");
            }
          })
          .catch(err => console.log(err))
      }

}

  function handleRegister ({email, password}) {
      
      auth.register ({email, password})
          .then (() => {
            setIsRegistered(true);
            setIsRegisteredPopupOpen(true);
          })
          .catch (
            ((err) => {console.log(err);
            setIsRegistered(false);
            setIsRegisteredPopupOpen(true);
              })
          )
  }

  function onSignOut () {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    history.push("/sign-in");
  }


  return (
    
      <CurrentUserContext.Provider value={currentUser}>
        <div className="root">
            <Header 
              onSignOut={onSignOut}
              loggedIn={loggedIn}
              userData={userData}
            />
              <Switch>
                <Route path="/sign-up">
                    <Register onRegister={handleRegister}/>
                  </Route>
                  <Route path="/sign-in">
                    <Login onLogin={handleLogin} tokenCheck={tokenCheck}/>
                  </Route>
                  <ProtectedRoute 
                    exact path="/" 
                    loggedIn={loggedIn}
                    component = {() => (
                      
                      <Main

                      onEditProfile={handleEditProfileClick}
                      onAddPlace={handleAddPlaceClick}
                      onEditAvatar={handleEditAvatarClick}
                      onCardClick={setSelectedCard}
                      onCardLike={handleCardLike}
                      onCardDislike={handleCardDislike}
                      onCardDelete={handleCardDelete}
                      cardArray={cards}
                    />

                    )}
                  />
                  <Route path="*">
                    <Redirect to="/sign-in"/>
                  </Route>
              </Switch>
            <Footer />
            <InfoToolTip 
              isOpen={isRegisteredPopupOpen} 
              onClose={closeAllPopups} 
              isRegistered={isRegistered}
            />

            <EditProfilePopup 
              isOpen={isEditProfilePopupOpen} 
              onClose={closeAllPopups} 
              onUpdateUser={handleUpdateUser}
            />
                          
            <AddPlacePopup 
              isOpen={isAddPlacePopupOpen} 
              onClose={closeAllPopups}
              onAddPlace={handleAddPlaceSubmit}
            />

            <EditAvatarPopup 
              isOpen={isEditAvatarPopupOpen} 
              onClose={closeAllPopups} 
              onUpdateAvatar={handleUpdateAvatar}
            />

            <ImagePopup 
              card={selectedCard}
              onClose={closeAllPopups}
            />
        </div>
      </CurrentUserContext.Provider>
  );
}

export default App;
