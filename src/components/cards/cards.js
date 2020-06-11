import React from "react";
import { Link } from 'react-router-dom';

import "./cards.scss";

const Cards = ({ id, imagem, nome, preco, preco_promocional, selo, discount}) => {    
    return (
        <div className="content__cards">
            <div className="card" id={id}>
                <div className="card__img">
                    {
                        imagem ?
                            <Link to={`/product/${id}`}>
                                <img src={imagem} alt={nome} title={nome} />
                            </Link> :
                            <Link to={`/product/${id}`}>
                                <div className="img__indisponivel">
                                    <p>Imagem indisponível</p>
                                </div>
                            </Link>
                    }
                    {
                        selo ?
                            <Link to="/" className="liked">
                                <i className="far fa-heart"></i>
                            </Link> : ''
                    }
                    {
                        selo && discount ?
                            <span className="promocao">{discount}%</span> : ''
                    }
                </div>
                <div className="card__title">
                    <p className="title">{nome}</p>
                    {
                        preco_promocional ?
                            <p>
                                <span className="sub__title" id="preco">${preco}</span>
                                <span className="sub__title">${preco_promocional}</span>
                            </p> :
                            <p className="sub__title">${preco}</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default Cards;