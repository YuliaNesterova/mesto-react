import React, {useEffect} from 'react'
import api from '../utils/api.js';
import Card from "./Card.js";

function Main (props) {
    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();
    const [cards, setCards] = React.useState([]);

    useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
            .then(([user, cards]) => {
                    setUserName(user.name);
                    setUserDescription(user.about);
                    setUserAvatar(user.avatar);
                    setCards(cards);
            })
            .catch(() => {
                console.log("Неизвестная ошибка, попробуйте еще раз");
            })
    })

        return (
            <main className="content">

                <section className="profile">

                    <div className="profile__info">
                        <button className="profile__image-button" onClick={props.onEditAvatar}>
                            <img src={userAvatar} alt="Жак-Ив Кусто" className="profile__image" />
                        </button>

                        <h1 className="profile__title">{userName}</h1>
                        <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
                        <p className="profile__subtitle">{userDescription}</p>
                    </div>
                    <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
                </section>

                <section className="elements">
                    <ul className="elements__items">
                        {cards.map((card) => {
                            return (
                            <Card card={card} key={card._id} onCardClick={props.onCardClick}/>
                            )
                        })}
                    </ul>
                </section>

            </main>
    );
}

export default Main;

