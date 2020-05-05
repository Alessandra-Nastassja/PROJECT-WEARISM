import React from 'react';

import "./product.scss"

const Product = () => {
    return (
        <>
            <section className="content__product">
                <div className="product__header">
                    <div className="product__card">
                        <div className="product__img">
                            <img src="" alt="..." title="" />
                        </div>
                    </div>
                </div>
                <div className="product__description">
                    <p className="product__title">Bolsa Rosa</p>
                    <div>
                        <p className="product__price">
                            <span className="product__price--regular">$ 19.9</span>
                            <span className="product__price--discount">$ 9.9</span>
                        </p>
                        <small className="product__installments">em até 2x R$ 4.99</small>
                    </div>
                    <div>
                        <p>Escolha o tamanho</p>
                        <button className="product__btn--size">P</button>
                    </div>
                    <div className="product__btn--bag">
                        <button>Adicionar à sacola</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Product;