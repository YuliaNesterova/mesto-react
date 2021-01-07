import React from 'react'
import api from '../utils/Api.js';
import Card from "./Card.js";

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userName:'',
            userDescription:'',
            userAvatar:'',
            cards: []
        }
    }

    componentDidMount() {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
            .then(([user, cards]) => {
                this.setState({
                        userName: user.name,
                        userDescription: user.about,
                        userAvatar: user.avatar,
                        cards: cards
                    })
            })
            .catch(() => {
                console.log("Неизвестная ошибка, попробуйте еще раз");
            })
    }

    render(){
        return (
            <main className="content">

                <section className="profile">

                    <div className="profile__info">
                        <button className="profile__image-button" onClick={this.props.onEditAvatar}>
                            <img src={this.state.userAvatar} alt="Жак-Ив Кусто" className="profile__image" />
                        </button>

                        <h1 className="profile__title">{this.state.userName}</h1>
                        <button className="profile__edit-button" type="button" onClick={this.props.onEditProfile}></button>
                        <p className="profile__subtitle">{this.state.userDescription}</p>
                    </div>
                    <button className="profile__add-button" type="button" onClick={this.props.onAddPlace}></button>
                </section>

                <section className="elements">
                    <ul className="elements__items">
                        {this.state.cards.map((card) => {
                            return (
                            <Card card={card} key={card._id} onCardClick={this.props.onCardClick}/>
                            )
                        })}
                    </ul>
                </section>

            </main>
    )};
}

