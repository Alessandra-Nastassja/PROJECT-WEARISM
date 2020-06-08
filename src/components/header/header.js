import React, { useState } from "react";

import Bag from '../bag/bag';

import "./header.scss";
import Search from '../search/search';

const Header = () => {
    const [ visible, setVisible ] = useState(false);

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
                            <button onClick={() => {
                                setVisible(!visible)
                            }}>
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                        <div className="buy">
                           <Bag />
                        </div>
                    </div>
                </div>
            </header>
            <Search setVisible={setVisible}/>
        </>
    )
}

export default Header;