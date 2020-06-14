import React, { useState, useEffect } from 'react';
import { connect, useSelector } from "react-redux";

import { getBag, removeBag } from '../../actions/bag.actions';

import "./bag.scss";

const Bag = ({ openBag, setOpenBag, onFetch, removeItemBag }) => {
    const [removeItem, setRemoveItem] = useState([]);
    const [index, setIndex] = useState(null);
    const [counter, setCount] = useState(1)

    const items = useSelector(state => state.bagData.shoppingBag);

    useEffect(() => {
        onFetch();
    }, [])

    useEffect(() => {
        removeItemBag(removeItem, index)
    }, [removeItem, index, removeItemBag])

    const add = () => setCount(counter + 1);
    const sub = () => setCount(counter - 1);

    var bag = Object.values(items);

    return (
        <article className={openBag ? 'hidden' : ''}>
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
                    {
                        bag && bag.map((item, index) => {

                            return (
                                <div className="bag__content--item" key={item.id}>
                                    <figure className="item__img">
                                        {
                                            item.imagem ?
                                                <img src={item.imagem} alt={item.nome} title={item.nome} /> :
                                                <p>Imagem indisponível</p>

                                        }
                                        <button onClick={() => setRemoveItem(item.id), () => setIndex(index)}>Remover item</button>
                                    </figure>
                                    <div className="item__desc">
                                        <p>{item.nome}</p>
                                        {
                                            item.size.map(size => {
                                                return (
                                                    <small>Tamanho: {size}</small>
                                                );
                                            })
                                        }
                                        <div className="item__desc--qtd">
                                            <button onClick={sub}>-</button>
                                            <p>{counter}</p>
                                            <button onClick={add}>+</button>
                                        </div>
                                    </div>
                                    <div className="item__preco">
                                        {
                                            item.preco_promocional ?
                                                <p>$ {item.preco_promocional}</p> :
                                                <p>$ {item.preco}</p>
                                        }
                                        <small>{item.prestacoes}</small>
                                    </div>
                                </div>
                            );
                        })
                    }
                    {
                        bag.length === 0 &&
                        <p className="bag__content--not">Sua sacola esta vazia! <span role="img" aria-label="icon">😉</span></p>
                    }
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

const mapStateToProps = (state) => {
    return {
        bag: state.bagData.shoppingBag || [],
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetch: () => {
            dispatch(getBag());
        },
        removeItemBag: (removeItem, index) => {
            dispatch(removeBag(removeItem, index));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Bag);