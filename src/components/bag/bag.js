import React from 'react';

import "./bag.scss";

const Bag = ({ openBag, setOpenBag }) => {
    return (
        <article className={openBag ? 'hidden': ''}>
            <div className="content__bag">
                <div className="bag__header">
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
                <div className="bag__content">
                    <p className="bag__content--not">Sua sacola esta vazia! <span role="img" aria-label="icon">😉</span></p>
                </div>
                <div className="bag__footer">
                    <p className="bag__content--title">
                        Subtotal - 
                        <span>R$ 0,00</span>
                    </p>
                </div>
            </div>
        </article>
    );
}

export default Bag;