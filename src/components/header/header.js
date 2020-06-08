import React, { useState } from "react";

import Bag from '../bag/bag';

import "./header.scss";
import Search from '../search/search';

const Header = () => {
    const [ openSearch, setoOpenSearch ] = useState(false);
    const [ openBag, setOpenBag ] = useState(false);

    function handleOpenSearch() {
        setoOpenSearch(!openSearch);
    }
    function handleOpenBag() {
        setOpenBag(!openBag);
    }

    return (
        <>
            <header>
                <div className="content__header">
                    <div className="header__logo">
                        <h1>
                            <a href="/">
                                wearism
                            </a>
                        </h1>
                    </div>
                    <div className="header__buy">
                        <div className="search">
                            <button onClick={handleOpenSearch}>
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                        <div className="buy">
                        <button onClick={handleOpenBag}>
                            <i className="fas fa-shopping-bag"></i>
                        </button>
                        </div>
                    </div>
                </div>
            </header>
            <Search setVisible={setoOpenSearch} />
            <Bag setVisible={setOpenBag} />
        </>
    )
}

export default Header;