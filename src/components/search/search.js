import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";

import { fecthSearch } from '../../actions/search.actions';
import { fetchProducts } from '../../actions/products.actions'

import "./search.scss";

const Search = ({ openSearch, setOpenSearch, setSearch, getProducts }) => {   
    const [type, setType] = useState([]); 

    const { products } = useSelector(state => state.productsData);   
    const { search } = useSelector(state => state.searchData.search);   

    const handleSearch = (nome, products) => {
        return products.filter((product) => 
            product.nome.toLowerCase().includes(nome.toLowerCase()));	
	}
    
    useEffect(() => {
        setSearch(handleSearch(type, products))
    }, [type, setSearch])

    return (
        <article className={openSearch ? 'hidden': ''}>
            <div className="content__search">
                <div className="search__header">
                    <button onClick={() => { 
                        setOpenSearch(true) 
                    }}>
                        <i className="fas fa-arrow-left"></i>
                    </button>
                    <p>Buscar Produtos</p>
                </div>
                <div className="search__input">
                    <input 
                        placeholder="Busque aqui o seu produto!"
                        onChange={({target: { value }}) => setType(value)}/>
                </div>
                <div className="search__content">
                    <p className="search__content--not">Nenhum produto por aqui! <span role="img" aria-label="icon">🙁</span></p>
                </div>
            </div>
        </article>
    );
}
const mapStateToProps = (state) => {
    console.log(state);
    
    return {
        products: state.productsData.products || [],
        search: state.searchData.search || []
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setSearch: (type) => {            
            fecthSearch(type)
        },
        getProducts: () => {
            dispatch(fetchProducts());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search);
