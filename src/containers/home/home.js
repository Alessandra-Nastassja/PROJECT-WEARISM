import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchProducts } from '../../actions/products.actions';

import "./home.scss"

const Home = (props) => {
    useEffect(() => {
        props.onFetch();
    }, [])

    return (
        <>
            oi
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