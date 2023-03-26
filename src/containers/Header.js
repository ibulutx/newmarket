

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div className="ui inverted menu" style={{ backgroundColor: "#5c9aff" }}>
        <Link to="/" className="header item" style={{ color: "white" }}>
            Trendthis
        </Link>
        <Link to="/" className="item" style={{ color: "white" }}>
            Ana Sayfa
        </Link>
        <Link to="/product/" className="item" style={{ color: "white" }}>
            Ürünler
        </Link>
        <Link to="/cart/" className="item" style={{ color: "white" }}>
            Sepet
        </Link>
        <div className="right menu">
            <div className="item">
                <div className="ui icon input">
                    <input type="text" placeholder="Ara..." />
                    <i className="search link icon" style={{ color: "white" }}></i>
                </div>
            </div>
            <Link to="/login" className="item" style={{ color: "white" }}>
                Giriş Yap
            </Link>
            <Link to="/register" className="item" style={{ color: "white" }}>
                Üye Ol
            </Link>
        </div>
    </div>
);
};
export default Header





