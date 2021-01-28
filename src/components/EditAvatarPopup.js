import React from "react";

import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup(props) {
    const newCardRef = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateAvatar({
            avatar: newCardRef.current.value
        });
    }
    return (
        <PopupWithForm isOpen={props.isOpen} onClose={props.onClose} name={`edit-pic`} title={`Обновить аватар`} text={`Сохранить`}
                       onSubmit={handleSubmit}>
            <fieldset className="popup__field">
                <input type="url" name="user_pic" className="popup__input popup__input_type_link"
                       id="profile-pic-input"
                       placeholder="Ссылка на картинку"
                       ref={newCardRef} required />
                <span className="popup__input-error" id="profile-pic-input-error"></span>
            </fieldset>
        </PopupWithForm>
    )
}