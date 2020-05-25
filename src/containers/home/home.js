import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";

import { fetchProducts } from '../../actions/products.actions';

import Cards from "../../components/cards/cards";

import "./home.scss"

const Home = (props) => {

    const data = useSelector(state => state.productsData)

    useEffect(() => {
        props.onFetch();
    }, [])

    return (
        <>
            <div className="title__section">
                <p>Destaque</p>
                <small>{data.products.length} items</small>
            </div>
            <section>
                {
                    data.isLoading === true ?
                        <p>Loading!</p> : (data.error ? <p>{data.error.message}</p> :
                            data.products.map(({ id, imagem, nome, preco, preco_promocional, selo, discount }) => {
                                return <Cards key={id} id={id} imagem={imagem} nome={nome} preco={preco} preco_promocional={preco_promocional} selo={selo} discount={discount} />
                            }))
                }
            </section>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.productsData.products || [],
        error: state.productsData.error || null,
        isLoading: state.productsData.isLoading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetch: () => {
            dispatch(fetchProducts());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);