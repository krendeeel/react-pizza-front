import React from 'react';
import { IPizzaInfo } from '../types/cart';
import Button from './Button';
import { MinusIcon, PlusIcon, RemoveIcon } from './icons';

interface CartItemProps {
  pizzaInfo: IPizzaInfo
  onRemoveItem: (_id: string, type: string, size: string) => void,
  onRemovePizza: (_id: string, type: string, size: string, price: number) => void,
  onAddPizza: (_id: string, type: string, size: string, price: number) => void,
}

const Component: React.FC<CartItemProps> = ({ onAddPizza, onRemoveItem, onRemovePizza, pizzaInfo }) => {
  const { _id, type, size, name, img, price, count } = pizzaInfo
  const handleRemoveClick = () => {
    onRemoveItem(_id, type, size);
  };

  const handlePlusItem = () => {
    onAddPizza(_id, type, size, price / count);
  };

  const handleMinusItem = () => {
    onRemovePizza(_id, type, size, price / count);
  };

  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img
          className="pizza-block__image"
          src={img}
          alt="Pizza"
        />
      </div>
      <div className="cart__item-info">
        <h3>{name}</h3>
        <p>
          {type} тесто, {size} см.
        </p>
      </div>
      <div className="cart__item-count">
        <div
          onClick={handleMinusItem}
          className="button button--outline button--circle cart__item-count-minus">
          <MinusIcon />
        </div>
        <b>{count}</b>
        <div
          onClick={handlePlusItem}
          className="button button--outline button--circle cart__item-count-plus">
          <PlusIcon />
        </div>
      </div>
      <div className="cart__item-price">
        <b>{price} ₽</b>
      </div>
      <div className="cart__item-remove">
        <Button onClick={handleRemoveClick} className="button--circle" outline>
          <RemoveIcon />
        </Button>
      </div>
    </div>
  );
};

const CartItem = React.memo(Component)

export default CartItem;
