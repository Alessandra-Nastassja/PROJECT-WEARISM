import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";

import { fecthSearch } from '../../actions/search.actions';
import { fetchProducts } from '../../actions/products.actions'

import "./search.scss";

const Search = ({ openSearch, setOpenSearch, setSearch, getProducts }) => {
    const [type, setType] = useState([]);

    const products = useSelector(state => state.productsData.products);
    const search = useSelector(state => state.searchData.search);

    const handleSearch = (nome, products) => {

        return products && products.filter((product) =>
            product.nome.toLowerCase().includes(nome.toLowerCase()));
    }

    useEffect(() => {
        setSearch(handleSearch(type, products))
    }, [type, setSearch])

    useEffect(() => {
        getProducts();
    }, [])

    console.log(search);

    return (
        <article className={openSearch ? 'hidden' : ''}>
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
                        onChange={({ target: { value } }) => setType(value)} />
                </div>
                <div className="search__content">
                    {
                        search && search.map(item => {
                            console.log(item);

                            return (
                                <div className="search__content--item">
                                    <figure className="item__img">
                                        {
                                            item.imagem ?
                                                <img src={item.imagem} alt={item.nome} title={item.nome} /> :
                                                <p>Imagem indisponível</p>

                                        }
                                    </figure>
                                    <div className="item__desc">
                                        <p>{item.nome}</p>
                                        <div className="item__desc--content">
                                            {
                                                item.tamanhos_disponiveis.map(item => {
                                                    return (
                                                        <small>{item.valido == true && item.tamanho}</small>
                                                    );
                                                })
                                            }
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
                            )
                        })
                    }
                    {
                        search.length === 0 &&
                        <p className="search__content--not">Nenhum produto por aqui! <span role="img" aria-label="icon">🙁</span></p>
                    }
                </div>
            </div>
        </article>
    );
}
const mapStateToProps = (state) => {
    return {
        products: state.productsData.products || [],
        search: state.searchData.search || []
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setSearch: (type) => {
            dispatch(fecthSearch(type))
        },
        getProducts: () => {
            dispatch(fetchProducts());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search);
