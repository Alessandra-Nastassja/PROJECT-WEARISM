import React, { useState, useEffect } from 'react';
import { connect, useSelector } from "react-redux";

import { getBag } from '../../actions/bag.actions';

import "./bag.scss";

const Bag = ({ openBag, setOpenBag, onFetch }) => {
    const [bag, setBag] = useState([]);

    const items = useSelector(state => state.bagData.shoppingBag)

    useEffect(() => {
        onFetch();
    }, [])

    console.log(items);
    

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

const mapStateToProps = (state) => {
    return {
        bag: state.bagData.shoppingBag || [],
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetch: () => {
            dispatch(getBag());
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Bag);