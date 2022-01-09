import { Dispatch } from 'react';
import { PizzasDataService } from '../../api';
import { IPizza, PizzaAction, PizzaActionTypes } from '../../types/pizza';

export const setLoaded = (payload: boolean): PizzaAction => ({
  type: PizzaActionTypes.SET_LOADED,
  payload,
});

export const fetchPizzas = (sortBy: number | null, category: number | null) => async (dispatch: Dispatch<PizzaAction>) => {
  dispatch(setLoaded(false));
  dispatch(setPizzas(await PizzasDataService.getPizzas(category, sortBy)));
};

export const setPizzas = (items: IPizza[]): PizzaAction => ({
  type: PizzaActionTypes.SET_PIZZAS,
  payload: items,
});
