import { Dispatch } from "react";
import { CartDataService } from "../../api";
import { CartAction, CartActionTypes, getOrderDataType } from "../../types/cart";
import { IPizza } from "../../types/pizza";

export const addPizzaToCart = (pizza: IPizza): CartAction => ({
  type: CartActionTypes.ADD_PIZZA_TO_CART,
  payload: pizza,
});

export const clearCart = (): CartAction => ({
  type: CartActionTypes.CLEAR_CART,
});

export const removeCartItem = (
  _id: IPizza['_id'],
  type: string,
  size: string,
): CartAction => ({
  type: CartActionTypes.REMOVE_CART_ITEM,
  payload: {
    _id,
    type,
    size
  },
});

export const plusPizzaToCart = (
  _id: IPizza['_id'],
  type: string,
  size: string,
  price: IPizza['price']): CartAction => ({
    type: CartActionTypes.PLUS_PIZZA_TO_CART,
    payload: {
      _id,
      type,
      size,
      price
    },
  });

export const minusPizzaFromCart = (
  _id: IPizza['_id'],
  type: string,
  size: string,
  price: IPizza['price']): CartAction => ({
    type: CartActionTypes.MINUS_PIZZA_FROM_CART,
    payload: {
      _id,
      type,
      size,
      price
    }
  });


export const setOrder = (order: string): CartAction => ({
  type: CartActionTypes.SET_ORDER,
  payload: order
})

export const setLoading = (loading: boolean): CartAction => ({
  type: CartActionTypes.SET_LOADING,
  payload: loading
})

export const fetchOrder = (data: getOrderDataType) => async (dispatch: Dispatch<CartAction>) => {
  try {
    dispatch(setLoading(true));
    dispatch(setOrder(await CartDataService.getOrder(data)))
  } catch (e) {
    alert('Ошибка загрузки! Повторите попыку!')
    dispatch(setLoading(false))
  }
}
