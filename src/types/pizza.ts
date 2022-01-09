export interface IPizza {
    _id: string,
    img: string,
    name: string,
    type: Array<string>,
    size: Array<string>,
    price: number,
    category: number,
    rating: number
}


export interface PizzaState {
    items: IPizza[],
    isLoaded: boolean
}

export enum PizzaActionTypes {
    SET_PIZZAS = 'SET_PIZZAS',
    SET_LOADED = 'SET_LOADED'
}

interface setLoaded {
    type: PizzaActionTypes.SET_LOADED,
    payload: boolean
}

interface setPizzas {
    type: PizzaActionTypes.SET_PIZZAS,
    payload: IPizza[]
}

export type PizzaAction = setLoaded | setPizzas