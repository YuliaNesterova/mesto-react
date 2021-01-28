import React, { useEffect } from "react";

import Header from './Header.js'
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(false);
    const [cards, setCards] = React.useState([]);
    const [currentUser, setCurrentUser] = React.useState('');

   useEffect(() => {
       Promise.all([api.getUserInfo(), api.getInitialCards()])
           .then(([userInfo, cards]) => {
               setCurrentUser(userInfo);
               setCards(cards);
           })
   }, [])

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

   function handleCardClick(card) {

        setSelectedCard({
            link: card.link,
            name: card.name
        });
    }

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
            const newCards = cards.map((c) => c._id === card._id ? newCard : c);
            setCards(newCards);
        })
            .catch(() => {
                console.log("Неизвестная ошибка, попробуйте еще раз");
            });
    }

    function handleCardDelete(card) {
        api.deleteCard(card._id).then(() => {
            const newCards = cards.filter((item) => {return item._id !== card._id})
            setCards(newCards)
        })
            .catch(() => {
                console.log("Неизвестная ошибка, попробуйте еще раз");
            })
    }

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard(false);
    }

   function handleUpdateUser(object) {
       api.changeUserInfo(object).then((user) => {
           setCurrentUser(user);
           setIsEditProfilePopupOpen(false);
       });
    }

    function handleUpdateAvatar(object) {
       api.getNewUserPic(object).then((avatar) => {
           setCurrentUser(avatar);
           setIsEditAvatarPopupOpen(false);
       })
    }

    function handleAddPlace(object) {
        api.addNewCard(object).then((newCard) => {
            setCards([newCard, ...cards]);

            setIsAddPlacePopupOpen(false);
        })
    }

  return (
      <CurrentUserContext.Provider value={currentUser}>

          <div className="page">
              <Header />
              <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}
                    onCardClick={handleCardClick} cards={cards} onCardLike={handleCardLike} onCardDelete={handleCardDelete}/>
              <Footer />
              <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
              <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>
              <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlace} />

              <PopupWithForm name={`delete`} title={`Вы уверены?`} text={`Да`}/>
              <ImagePopup name={`image`} card={selectedCard} onClose={closeAllPopups} />
          </div>

      </CurrentUserContext.Provider>
      );
}

export default App;
