import React, { useRef, useState } from 'react';
import { useOnClickOutside } from '../hooks';
import { ArrowIcon } from './icons';

interface SortPopupProps {
    items: Array<string>
    activeSort: number,
    selectSort: (index: number) => void
}

const Component: React.FC<SortPopupProps> = ({ items = [], activeSort, selectSort }) => {
    const [visiblePopup, setVisiblePopup] = useState(false);
    const sortRef = useRef(null);
    const activeSortLabel = items[Number(activeSort)];

    const toggleVisiblePopup = () => {
        setVisiblePopup(actual => !actual);
    };

    useOnClickOutside(sortRef, () => setVisiblePopup(false))

    const onSelectItem = (index: number) => {
        if (selectSort) {
            selectSort(index);
        }
        setVisiblePopup(false);
    };

    return (
        <div ref={sortRef} className="sort">
            <div className="sort__label">
                <ArrowIcon onOff={visiblePopup} />
                <b>Сортировка по:</b>
                <span onClick={toggleVisiblePopup}>{activeSortLabel}</span>
            </div>
            {visiblePopup && (
                <div className="sort__popup">
                    <ul>
                        {items &&
                            items.map((item, index) => (
                                <li
                                    onClick={() => onSelectItem(index)}
                                    className={activeSort === index ? 'active' : ''}
                                    key={`${item}_${index}`}>
                                    {item}
                                </li>
                            ))}
                    </ul>
                </div>
            )}
        </div>

    );
}

const SortPopup = React.memo(Component);

export default SortPopup;
