import React from "react";

import "./cards.scss";

const Cards = (props) => {
    return (
        <div className="content__cards">
            <div className="card" data-testid="product" id={props.id}>
                <div className="card__img">
                    {
                        props.imagem ?
                            <a href={`/product/${props.id}`}>
                                <img src={props.imagem} alt={props.nome} title={props.nome} />
                            </a> :
                            <div className="img__indisponivel">
                                <p>Imagem indisponível</p>
                            </div>
                    }
                    {
                        props.selo ?
                            <a href="/" className="liked">
                                <i className="far fa-heart"></i>
                            </a> : ''
                    }
                    {
                        props.selo && props.discount ?
                            <span className="promocao">{props.discount}%</span> : ''
                    }
                </div>
                <div className="card__title">
                    <p className="title">{props.nome}</p>
                    {
                        props.preco_promocional ?
                            <p>
                                <span className="sub__title" id="preco">${props.preco}</span>
                                <span className="sub__title">${props.preco_promocional}</span>
                            </p> :
                            <p className="sub__title">${props.preco}</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default Cards;