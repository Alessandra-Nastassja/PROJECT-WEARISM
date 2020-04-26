import React from "react";

import "./cards.scss";

const Cards = (props) => {
    return (
        <div className="content__cards">
            <div className="card" id={props.id}>
                <div className="card__img">
                    <img src={props.imagem} alt={props.nome} />
                    <a href="/" className="liked">
                        <i className="far fa-heart"></i>
                    </a>
                </div>
                <div className="card__title">
                    <p className="title">{props.nome}</p>
                    <p className="sub__title">${props.preco}</p>
                </div>
            </div>
        </div>
    )
}

export default Cards;