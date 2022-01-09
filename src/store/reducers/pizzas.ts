import { PizzaAction, PizzaActionTypes, PizzaState } from "../../types/pizza";

const initialState: PizzaState = {
  items: [],
  isLoaded: false,
};

const pizzas = (state = initialState, action: PizzaAction): PizzaState => {
  switch (action.type) {
    case PizzaActionTypes.SET_PIZZAS:
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };

    case PizzaActionTypes.SET_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      };

    default:
      return state;
  }
};

export default pizzas;
