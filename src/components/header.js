import React from 'react';

const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand">CCI STORE</a>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <a className="nav-link">Accueil<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Articles</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled">Disabled</a>
                </li>
            </ul>
            
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Cart</button>
            
        </div>
    </nav>
);

export default Header;