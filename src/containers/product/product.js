import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { connect, useSelector } from "react-redux";

import { fetchProduct } from '../../actions/product.actions';

import "./product.scss"

const Product = (props) => {
    const [setParamsId] = useState('');

    const data = useSelector(state => state.productsData.product);
    
    const { params: { id } } = useRouteMatch();
   
    useEffect(() => {
        props.setParamsId(id)

    }, [id, setParamsId])      
    

    return (
        <>
            <section className="content__product">
                <div className="product__header">
                    <div className="product__card">
                        <div className="product__img">
                            <img src={data.imagem} alt={data.nome} title={data.nome} width="400px"/>
                        </div>
                    </div>
                </div>
                <div className="product__description">
                    <p className="product__title">{data.nome}</p>
                    <div>
                        <p className="product__price">
                            <span className="product__price--regular">$ {data.preco}</span>
                            <span className="product__price--discount">$ {data.preco_promocional}</span>
                        </p>
                        <small className="product__installments">em até {data.prestacoes}</small>
                    </div>
                    <div>
                        <p>Escolha o tamanho</p>
                        {
                            data.tamanhos_disponiveis && data.tamanhos_disponiveis.map(({valido, tamanho, sku}) => {
                                return ( 
                                    valido ? 
                                    <button key={sku} className="product__btn--size">{tamanho}</button> : 
                                    ''
                                )
                            })

                        }
                        {/* <p>Nenhum tamanho por aqui! <span role="img" aria-label="icon">😶</span></p> */}
                    </div>
                    <div className="product__btn--bag">
                        <button>Adicionar à sacola</button>
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