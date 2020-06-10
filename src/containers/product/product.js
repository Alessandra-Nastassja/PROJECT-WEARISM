import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { connect, useSelector } from "react-redux";

import { fetchProduct, fetchBag } from '../../actions/product.actions';

import "./product.scss"

const Product = (props) => {
    const [setParamsId] = useState('');
    const [size, setSize] = useState([]);
    const [bag, setBag] = useState([]);
    const [item, setItem] = useState([]);

    const {
        imagem,
        nome,
        preco_promocional,
        preco, prestacoes,
        tamanhos_disponiveis
    } = useSelector(state => state.productsData.product);

    const { params: { id } } = useRouteMatch();

    useEffect(() => {
        props.setParamsId(id)

    }, [id, setParamsId]);

    function handleSize(tamanho) {
        setSize([
            ...tamanho
        ])
    }
    function handleSubmit() {
        setItem({
            nome,
            imagem,
            preco_promocional,
            preco,
            prestacoes,
            size
        })
    }

    return (
        <>
            <Link to="/">
                Home
            </Link>
            <section className="content__product">
                <div className="product__header">
                    <div className="product__card">
                        <div className="product__img">
                            {
                                imagem ?
                                    <img src={imagem} alt={nome} title={nome} width="400px" /> :
                                    <p>Imagem indisponível</p>
                            }
                        </div>
                    </div>
                </div>
                <div className="product__description">
                    <p className="product__title">{nome}</p>
                    <div>
                        {
                            preco_promocional ?
                                <p className="product__price">
                                    <span className="product__price--regular">$ {preco}</span>
                                    <span className="product__price--discount">$ {preco_promocional}</span>
                                </p> :

                                <p className="product__price">$ {preco}</p>
                        }
                        <small className="product__installments">em até {prestacoes}</small>
                    </div>
                    <div>
                        <p>Escolha o tamanho</p>
                        {
                            tamanhos_disponiveis && tamanhos_disponiveis.length === 0 ?

                                <p>Nenhum tamanho por aqui! <span role="img" aria-label="icon">😶</span></p> :

                                tamanhos_disponiveis && tamanhos_disponiveis.map(({ valido, tamanho, sku }) => {
                                    return (
                                        valido ?
                                            <button key={sku} className="product__btn--size" onClick={() => handleSize(tamanho)}>{tamanho}</button> :
                                            ''
                                    )
                                })
                        }
                    </div>
                    <div className="product__btn--bag">
                        <button onClick={handleSubmit}>Adicionar à sacola</button>
                    </div>
                </div>
            </section>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        product: state.productsData.product || [],
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setParamsId: (id) => {
            dispatch(fetchProduct(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);