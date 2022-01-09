import React, { useCallback, useEffect } from 'react';
import { Categories, Pizzas, SortPopup } from '../components';
import { categoryNames, sortItems } from '../data';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';


const Home = () => {
    const { fetchPizzas, setCategory, setSortBy } = useActions()
    const { category, sortBy } = useTypedSelector(store => store.filters)


    useEffect(() => {
        fetchPizzas(sortBy, category);
    }, [category, sortBy]);

    const onSelectCategory = useCallback((index: number | null) => {
        setCategory(index);
    }, []);

    const onSelectSort = useCallback((index: number) => {
        setSortBy(index);
    }, []);

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={category}
                    onClickCategory={onSelectCategory}
                    items={categoryNames}
                />
                <SortPopup
                    activeSort={sortBy}
                    items={sortItems}
                    selectSort={onSelectSort}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <Pizzas />
        </div>
    );
}

export default Home;
