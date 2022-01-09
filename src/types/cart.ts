import { IPizza } from "./pizza";

export interface CartState {
    items: IItems,
    totalPrice: number,
    totalCount: number,
    order: string | null,
    isLoading: boolean
}

export interface IItems {
    [keys: string]: {
        [keys: string]: {
            [keys: string]: {
                name: string,
                img: string,
                count: number,
                price: number
            }
        }
    }
}

export interface IPizzaInfo {
    size: string,
    type: string,
    _id: string,
    count: number,
    price: number,
    img: IPizza['img'],
    name: IPizza['name']
}

export enum CartActionTypes {
    ADD_PIZZA_TO_CART = 'ADD_PIZZA_TO_CART',
    REMOVE_CART_ITEM = 'REMOVE_CART_ITEM',
    PLUS_PIZZA_TO_CART = 'PLUS_PIZZA_TO_CART',
    MINUS_PIZZA_FROM_CART = 'MINUS_PIZZA_FROM_CART',
    CLEAR_CART = 'CLEAR_CART',
    SET_ORDER = 'SET_ORDER',
    SET_LOADING = 'SET_LOADING'
}

interface setLoading {
    type: CartActionTypes.SET_LOADING,
    payload: boolean
}

interface setOrder {
    type: CartActionTypes.SET_ORDER,
    payload: string | null
}

interface addPizzaToCart {
    type: CartActionTypes.ADD_PIZZA_TO_CART,
    payload: IPizza
}

interface clearCart {
    type: CartActionTypes.CLEAR_CART,
}

interface removeCartItem {
    type: CartActionTypes.REMOVE_CART_ITEM,
    payload: {
        _id: IPizza['_id'],
        size: string,
        type: string
    }
}

interface plusPizzaToCart {
    type: CartActionTypes.PLUS_PIZZA_TO_CART,
    payload: {
        _id: IPizza['_id'],
        size: string,
        type: string,
        price: IPizza['price']
    }
}

interface minusPizzaFromCart {
    type: CartActionTypes.MINUS_PIZZA_FROM_CART,
    payload: {
        _id: IPizza['_id'],
        size: string,
        type: string,
        price: IPizza['price']
    }
}

export type CartAction = addPizzaToCart | clearCart | removeCartItem | plusPizzaToCart | minusPizzaFromCart | setLoading | setOrder

export interface getOrderDataType {
    items: IItems,
    totalCount: number,
    totalPrice: number
}

