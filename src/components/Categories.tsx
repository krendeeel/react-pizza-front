import React from 'react';

interface CategoriesProps {
    activeCategory: number | null,
    items: Array<string>,
    onClickCategory: (index: number | null) => void
}

const Component: React.FC<CategoriesProps> = ({ activeCategory = 0, items = [], onClickCategory }) => {
    return (
        <div className="categories">
            <ul>
                <li
                    className={activeCategory === null ? 'active' : ''}
                    onClick={() => onClickCategory(null)}>
                    Все
                </li>
                {items &&
                    items.map((name, index) => (
                        <li
                            className={activeCategory === index ? 'active' : ''}
                            onClick={() => onClickCategory(index)}
                            key={`${name}_${index}`}>
                            {name}
                        </li>
                    ))}
            </ul>
        </div>
    );
}

const Categories = React.memo(Component);

export default Categories;


