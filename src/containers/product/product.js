import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { connect, useSelector } from "react-redux";

import { fetchProduct } from '../../actions/product.actions';
import { fetchBag } from '../../actions/bag.actions';

import "./product.scss"

const Product = ({ setParamsId, setBag }) => {
    const [seletedItems, setSeletedItems] = useState([]);
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
        setParamsId(id)
    }, [id, setParamsId]);

    useEffect(() => {
        setBag(item)
    }, [item, setBag])
    
    function handleSelectSize(sku){
        const alreadySelected = seletedItems.findIndex(sizes => sizes === sku);
        
       if (alreadySelected >= 0) {
           const filteredSizes = seletedItems.filter(sizes => sizes !== sku)
       
           setSeletedItems(filteredSizes);
       }else{
            setSeletedItems([...seletedItems, sku])
       }       
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
                                    <img src={imagem} alt={nome} title={nome} /> :
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
                    <div className="content__product-btn">
                        <p>Escolha o tamanho</p>
                        {
                            tamanhos_disponiveis && tamanhos_disponiveis.length === 0 ?

                                <p className="product__message">Nenhum tamanho por aqui! <span role="img" aria-label="icon">😶</span></p> :

                                tamanhos_disponiveis && tamanhos_disponiveis.map(({ valido, tamanho, sku }) => {
                                    return (
                                        valido ?
                                            <button key={sku} className={seletedItems.includes(sku) ? 'selected': ''} onClick={() => handleSelectSize(sku)}>{tamanho}</button> :
                                            ''
                                    )
                                })
                        }
                    </div>
                    <div className="product__btn--bag">
                        <button onClick={() => setItem([...item, {
                            id,
                            nome,
                            imagem,
                            preco,
                            preco_promocional,
                            prestacoes,
                            size: seletedItems
                        }])}>Adicionar à sacola</button>
                    </div>
                </div>
            </section>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        product: state.productsData.product || [],
        bag: state.bagData.bag || [],
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setBag: (item) => {            
            dispatch(fetchBag(item))
        },
        setParamsId: (id) => {
            dispatch(fetchProduct(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);