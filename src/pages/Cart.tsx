import React from 'react';
import { Link } from 'react-router-dom';
import { Button, CartItem, EmptyCart } from '../components';
import { ArrowBackIcon, CartIcon, TrashIcon } from '../components/icons';
import { itemsToArray } from '../helpers';
import { useActions, useTypedSelector } from '../hooks';

const Cart: React.FC = () => {
    const { totalPrice, totalCount, items, order, isLoading } = useTypedSelector(store => store.cart);
    const { clearCart, removeCartItem, plusPizzaToCart, minusPizzaFromCart, fetchOrder } = useActions()
    const addedPizzas = itemsToArray(items)

    const onClearCart = () => {
        clearCart();
    };

    const onRemoveItem = (_id: string, type: string, size: string) => {
        removeCartItem(_id, type, size);
    };

    const onAddPizza = (_id: string, type: string, size: string, price: number) => {
        plusPizzaToCart(_id, type, size, price)
    };

    const onRemovePizza = (_id: string, type: string, size: string, price: number) => {
        minusPizzaFromCart(_id, type, size, price);
    };

    const onClickOrder = () => {
        fetchOrder({ items, totalCount, totalPrice })
    };

    return (
        <div className="container container--cart">
            {totalCount ? (
                <div className="cart">
                    <div className="cart__top">
                        <h2 className="content__title">
                            <CartIcon />
                            Корзина
                        </h2>
                        <div className="cart__clear">
                            <TrashIcon />
                            <span onClick={onClearCart}>Очистить корзину</span>
                        </div>
                    </div>
                    <div className="content__items">
                        {addedPizzas.map((pizzaInfo) => (
                            <CartItem
                                key={pizzaInfo._id + pizzaInfo.size + pizzaInfo.type}
                                pizzaInfo={pizzaInfo}
                                onRemoveItem={onRemoveItem}
                                onRemovePizza={onRemovePizza}
                                onAddPizza={onAddPizza}
                            />
                        ))}
                    </div>
                    <div className="cart__bottom">
                        <div className="cart__bottom-details">
                            <span>
                                Всего пицц: <b>{totalCount} шт.</b>
                            </span>
                            <span>
                                Сумма заказа: <b>{totalPrice} ₽</b>
                            </span>
                        </div>
                        <div className="cart__bottom-buttons">
                            <Link to="/" className="button button--outline button--add go-back-btn">
                                <ArrowBackIcon />
                                <span>Вернуться назад</span>
                            </Link>
                            {order ?
                                (<div className="cart__bottom-order">
                                    Код заказа:
                                    <span>{order}</span>
                                </div>) :
                                (<Button disabled={isLoading} onClick={onClickOrder} className="pay-btn">
                                    <span>Заказать</span>
                                </Button>)
                            }
                        </div>
                    </div>
                </div>
            ) : <EmptyCart />}
        </div>
    );
}

export default Cart;
