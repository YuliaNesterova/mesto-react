import React from "react";
import Header from './Header.js'
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(false);

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

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard(false);
    }

  return (

      <div className="page">
        <Header />
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}
              onCardClick={handleCardClick}/>
        <Footer />
        <PopupWithForm isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} name={`edit`} title={`Редактировать профиль`} text={`Сохранить`}
                       children={
                           <fieldset className="popup__field">
                               <input type="text" name="name" className="popup__input popup__input_type_title" placeholder="Имя"
                                      id="name-input"
                                      minLength="2"
                                      maxLength="40" required />
                               <span className="popup__input-error" id="name-input-error"></span>
                               <input type="text" name="profession" className="popup__input popup__input_type_subtitle"
                                      placeholder="Вид деятельности" id="profession-input"
                                      minLength="2" maxLength="200" required />
                               <span className="popup__input-error" id="profession-input-error"></span>
                           </fieldset>
                       }
                       />
          <PopupWithForm isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} name={`add`} title={`Новое место`} text={`Сохранить`}
                         children={
                             <fieldset className="popup__field">
                                 <input type="text" name="description" className="popup__input popup__input_type_description"
                                        id="description-input"
                                        placeholder="Название" minLength="1" maxLength="30" required />
                                 <span className="popup__input-error" id="description-input-error"></span>
                                 <input type="url" name="image" className="popup__input popup__input_type_link"
                                        id="place-image-input"
                                        placeholder="Ссылка на картинку" required />
                                 <span className="popup__input-error" id="place-image-input-error"></span>
                             </fieldset>
                         }
          />
          <PopupWithForm isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} name={`edit-pic`} title={`Обновить аватар`} text={`Сохранить`}
                         children={
                             <fieldset className="popup__field">
                                 <input type="url" name="user_pic" className="popup__input popup__input_type_link"
                                        id="profile-pic-input"
                                        placeholder="Ссылка на картинку" required />
                                 <span className="popup__input-error" id="profile-pic-input-error"></span>
                             </fieldset>
                         }
          />
          <PopupWithForm name={`delete`} title={`Вы уверены?`} text={`Да`}/>
          <ImagePopup name={`image`} card={selectedCard} onClose={closeAllPopups} />
          </div>

      );
}

export default App;
