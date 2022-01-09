import { FiltersAction, FiltersActionTypes } from "../../types/filters";

export const setSortBy = (index: number): FiltersAction => ({
  type: FiltersActionTypes.SET_SORT_BY,
  payload: index,
});

export const setCategory = (catIndex: null | number): FiltersAction => ({
  type: FiltersActionTypes.SET_CATEGORY,
  payload: catIndex,
});
