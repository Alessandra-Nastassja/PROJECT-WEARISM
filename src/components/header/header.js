import React, { useState } from "react";
import { Link } from 'react-router-dom';

import Bag from '../bag/bag';

import "./header.scss";
import Search from '../search/search';

const Header = () => {
    const [openSearch, setOpenSearch] = useState(true);
    const [openBag, setOpenBag] = useState(true);

    function handleOpenSearch() {
        setOpenSearch(!openSearch);
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
            <Search
                openSearch={openSearch}
                setOpenSearch={setOpenSearch}
            />
            <Bag
                openBag={openBag}
                setOpenBag={setOpenBag}
            />
        </>
    )
}

export default Header;