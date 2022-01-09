import React from 'react';
import { Link } from 'react-router-dom';
import logoSvg from '../assets/img/pizza-logo.svg';
import { useTypedSelector } from '../hooks';
import Button from './Button';
import { CartIcon } from './icons';


const Header: React.FC = () => {
    const { totalPrice, totalCount } = useTypedSelector(({ cart }) => cart);

    return (
        <div className="header">
            <div className="container">
                <Link to="/">
                    <div className="header__logo">
                        <img width="38" src={logoSvg} alt="Pizza logo" />
                        <div>
                            <h1>React Pizza</h1>
                            <p>самая вкусная пицца во вселенной</p>
                        </div>
                    </div>
                </Link>

                <div className="header__cart">
                    <Link to="/cart">
                        <Button className="button--cart">
                            <span>{totalPrice} ₽</span>
                            <div className="button__delimiter"></div>
                            <CartIcon />
                            <span>{totalCount}</span>
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
