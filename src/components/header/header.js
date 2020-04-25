import React from "react";

import "./header.scss";

const Header = () => {
    return (
        <>
            <header>
                <div className="content__header">
                    <div className="header__logo">
                        <h1>wearism</h1>
                    </div>
                    <div className="header__search">
                        <div className="search">
                            <input type="text" className="input__search" maxLength="45"/>
                            <a href="/" className="btn__search" type="submit">
                                <i className="fa fa-search"></i>
                            </a>
                        </div>
                    </div>
                    <div className="header__buy">
                        <div className="buy">
                            <a href="/">
                                <i class="fas fa-shopping-bag"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;