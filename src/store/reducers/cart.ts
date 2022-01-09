import { CartAction, CartActionTypes, CartState } from "../../types/cart";

const initialState: CartState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
  order: null,
  isLoading: false
};

const cart = (state = initialState, action: CartAction): CartState => {
  switch (action.type) {
    case CartActionTypes.ADD_PIZZA_TO_CART: {
      const newItems = {
        ...state.items,
        [String(action.payload.size)]: state.items[String(action.payload.size)] ?
          {
            ...state.items[String(action.payload.size)],
            [String(action.payload.type)]: state.items[String(action.payload.size)][String(action.payload.type)] ?
              {
                ...state.items[String(action.payload.size)][String(action.payload.type)],
                [String(action.payload._id)]: state.items[String(action.payload.size)][String(action.payload.type)][String(action.payload._id)] ? {
                  ...state.items[String(action.payload.size)][String(action.payload.type)][String(action.payload._id)],
                  count: state.items[String(action.payload.size)][String(action.payload.type)][String(action.payload._id)].count + 1,
                  price: state.items[String(action.payload.size)][String(action.payload.type)][String(action.payload._id)].price + action.payload.price
                } : {
                  img: action.payload.img,
                  count: 1,
                  name: action.payload.name,
                  price: action.payload.price
                }
              } : {
                [String(action.payload._id)]: {
                  img: action.payload.img,
                  count: 1,
                  name: action.payload.name,
                  price: action.payload.price
                }
              }
          } :
          {
            [String(action.payload.type)]: {
              [String(action.payload._id)]: {
                img: action.payload.img,
                count: 1,
                name: action.payload.name,
                price: action.payload.price
              }
            }
          }
      };

      return {
        ...state,
        items: newItems,
        totalCount: state.totalCount + 1,
        totalPrice: state.totalPrice + +action.payload.price,
        order: null
      };
    }

    case CartActionTypes.REMOVE_CART_ITEM: {
      const item = { ...state.items[String(action.payload.size)][String(action.payload.type)][String(action.payload._id)] }
      const newItems = {
        ...state.items,
      };
      item && delete newItems[String(action.payload.size)][String(action.payload.type)][String(action.payload._id)];
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - item.price,
        totalCount: state.totalCount - item.count,
        order: null
      };
    }

    case CartActionTypes.PLUS_PIZZA_TO_CART: {
      const newItems = {
        ...state.items,
        [String(action.payload.size)]: {
          ...state.items[String(action.payload.size)],
          [String(action.payload.type)]: {
            ...state.items[String(action.payload.size)][String(action.payload.type)],
            [String(action.payload._id)]: {
              ...state.items[String(action.payload.size)][String(action.payload.type)][String(action.payload._id)],
              count: state.items[String(action.payload.size)][String(action.payload.type)][String(action.payload._id)].count + 1,
              price: state.items[String(action.payload.size)][String(action.payload.type)][String(action.payload._id)].price + action.payload.price
            }
          },
        },
      };

      return {
        ...state,
        items: newItems,
        totalCount: state.totalCount + 1,
        totalPrice: state.totalPrice + +action.payload.price,
        order: null
      };
    }

    case CartActionTypes.MINUS_PIZZA_FROM_CART: {
      const count = state.items[String(action.payload.size)][String(action.payload.type)][String(action.payload._id)].count
      const newItems = {
        ...state.items,
        [String(action.payload.size)]: {
          ...state.items[String(action.payload.size)],
          [String(action.payload.type)]: {
            ...state.items[String(action.payload.size)][String(action.payload.type)],
            [String(action.payload._id)]: {
              ...state.items[String(action.payload.size)][String(action.payload.type)][String(action.payload._id)],
              count: count > 1 ? count - 1 : count,
              price: count > 1 ? state.items[String(action.payload.size)][String(action.payload.type)][String(action.payload._id)].price - +action.payload.price :
                state.items[String(action.payload.size)][String(action.payload.type)][String(action.payload._id)].price
            }
          },
        },
      };

      return {
        ...state,
        items: newItems,
        totalCount: count > 1 ? state.totalCount - 1 : state.totalCount,
        totalPrice: count > 1 ? state.totalPrice - +action.payload.price : state.totalPrice,
        order: null
      };
    }

    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        totalPrice: 0,
        totalCount: 0,
        items: {},
        order: null
      };

    case CartActionTypes.SET_ORDER:
      return {
        ...state,
        order: action.payload,
        isLoading: false
      }

    case CartActionTypes.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload
      }

    default:
      return state;
  }
};

export default cart;
