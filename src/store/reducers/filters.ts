import { FiltersAction, FiltersActionTypes, FiltersState } from "../../types/filters";

const initialState: FiltersState = {
  category: null,
  sortBy: 0
};

const filters = (state = initialState, action: FiltersAction): FiltersState => {
  switch (action.type) {
    case FiltersActionTypes.SET_SORT_BY: {
      return {
        ...state,
        sortBy: action.payload,
      };
    }
    case FiltersActionTypes.SET_CATEGORY: {
      return {
        ...state,
        category: action.payload,
      };
    }
    default:
      return state

  }
};

export default filters;
