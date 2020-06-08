import React, { useState } from 'react';

const Bag = ({setOpenBag}) => {
    return (
        <article>
            <div className="content__search">
                <div className="search__header">
                    <button onClick={() => {
                        setOpenBag(true)
                    }}>
                        <i className="fas fa-arrow-left"></i>
                    </button>
                    <p>
                        Sacola
                        <span>(0)</span>
                    </p>
                </div>
                <div className="search__input">
                    <input placeholder="Busque aqui o seu produto!"/>
                </div>
                <div className="search__content">
                    <p className="search__content--not">Sua sacola esta vazia! <span>😉</span></p>
                </div>
            </div>
        </article>
    );
}

export default Bag;