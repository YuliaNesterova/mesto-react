import React from "react";

export default function Card(props) {

function handleClick() {
        props.onCardClick(props.card);
    }

    return(
        <li className="element">
            <img src={props.card.link} alt={props.card.name} className="element__image" onClick={handleClick}/>
            <button className="element__delete-button"></button>
            <div className="element__description">
                <h2 className="element__text">{props.card.name}</h2>
                <div className="element__likes">
                    <button className="element__like-button" type="button"></button>
                    <span className="element__like-counter">{props.card.likes.length}</span>
                </div>
            </div>
        </li>
    )
}