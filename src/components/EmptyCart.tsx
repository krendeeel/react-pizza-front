import React from 'react'
import { Link } from 'react-router-dom';
import cartEmptyImage from '../assets/img/empty-cart.png';

const EmptyCart: React.FC = () => {
    return (
        <div className="cart cart--empty">
            <h2>
                Корзина пустая <i>😕</i>
            </h2>
            <p>
                Вероятней всего, вы не заказывали ещё пиццу.
                <br />
                Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <img src={cartEmptyImage} alt="Empty cart" />
            <Link to="/" className="button button--black">
                <span>Вернуться назад</span>
            </Link>
        </div>
    )
}

export default EmptyCart
