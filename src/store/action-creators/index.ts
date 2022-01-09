import * as PizzaActionCreators from './pizzas'
import * as FiltersActionCreators from './filters'
import * as CartActionCreators from './cart'

export default {
    ...PizzaActionCreators,
    ...FiltersActionCreators,
    ...CartActionCreators
}