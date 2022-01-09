import React from 'react'
import PizzaItem from './PizzaItem'
import LoadingBlock from './LoadingBlock'
import { useActions, useTypedSelector } from '../hooks'

const Pizzas: React.FC = () => {
    const items = useTypedSelector(store => store.pizzas.items)
    const isLoaded = useTypedSelector(store => store.pizzas.isLoaded)
    const { addPizzaToCart } = useActions()
    const handleAddPizzaToCart = (obj: any) => {
        addPizzaToCart(obj)
    };

    return (
        <div className="content__items">
            {isLoaded
                ? items.map((pizza: any) => (
                    <PizzaItem
                        onClickAddPizza={handleAddPizzaToCart}
                        key={pizza._id}
                        {...pizza}
                    />
                ))
                : Array(12)
                    .fill(0)
                    .map((_, index) => <LoadingBlock width={window.innerWidth} key={index} />)}
        </div>
    )
}

export default Pizzas
