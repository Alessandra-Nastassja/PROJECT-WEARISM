import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";

import { fetchProducts } from '../../actions/products.actions';

import Cards from "../../components/cards/cards";

import "./home.scss"

const Home = ({onFetch}) => {

    const { products, isLoading, error  } = useSelector(state => state.productsData);   

    useEffect(() => {
        onFetch();
    }, [])

    return (
        <>
            <div className="title__section">
                <p>Destaque</p>
                <small>{products.length} items</small>
            </div>
            <section>
                {
                    isLoading === true ?
                        <p>Loading!</p> : (error ? <p>{error.message}</p> :
                            products.map(({ id, imagem, nome, preco, preco_promocional, selo, discount }) => {
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