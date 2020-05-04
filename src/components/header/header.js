import React from "react";

import "./header.scss";

const Header = () => {
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
                            <a href="/">
                                <i className="fa fa-search"></i>
                            </a>
                        </div>
                        <div className="buy">
                            <a href="/">
                                <i className="fas fa-shopping-bag"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;