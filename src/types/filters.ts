
export interface FiltersState {
    category: null | number,
    sortBy: number,
}

export enum FiltersActionTypes {
    SET_SORT_BY = 'SET_SORT_BY',
    SET_CATEGORY = 'SET_CATEGORY'
}

interface setSortBy {
    type: FiltersActionTypes.SET_SORT_BY,
    payload: number
}

interface setCategory {
    type: FiltersActionTypes.SET_CATEGORY,
    payload: number | null
}

export type FiltersAction = setSortBy | setCategory

