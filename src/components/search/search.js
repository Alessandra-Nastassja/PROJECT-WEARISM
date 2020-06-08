import React from "react";

import "./search.scss";

const Search = ({setVisible}) => {   
    return (
        <article>
            <div className="content__search">
                <div className="search__header">
                    <button onClick={() => {
                        setVisible(true)
                    }}>
                        <i className="fas fa-arrow-left"></i>
                    </button>
                    <p>Buscar Produtos</p>
                </div>
                <div className="search__input">
                    <input placeholder="Busque aqui o seu produto!"/>
                </div>
                <div className="search__content">
                    <p className="search__content--not">Nenhum produto por aqui! <span>😉</span></p>
                </div>
            </div>
        </article>
    );
}

export default Search;
