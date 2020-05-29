import React from 'react';
import {Button} from 'react-bootstrap';

const Header = ({onClickCart, quantity}) => {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a href="/" className="navbar-brand">CCI STORE</a>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <a href="/" className="nav-link">Accueil<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-link">Articles</a>
                </li>
            </ul>
            <Button onClick={() => onClickCart(true)}> Cart ({quantity}) </Button>
        </div>
    </nav>
)};

export default Header;
