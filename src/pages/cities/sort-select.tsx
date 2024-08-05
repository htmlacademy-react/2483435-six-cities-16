import { useState } from 'react';
import { useActionCreators, useAppSelector } from '../../hooks/store';
import {
  activeActions,
  activeSelectors,
} from '../../store/slices/active-slice';
import { SortType } from '../../types/sort-type';
import { SortOption } from '../../const';

export function SortSelect() {
  const activeSortOption = useAppSelector(activeSelectors.sortOption);
  const { setSortOption } = useActionCreators(activeActions);

  const [openedClass, setOpenedClass] = useState('');

  const handleSortChange = (currentType: SortType) => {
    setSortOption(currentType);
  };
  const handleSortSelectClick = () =>
    setOpenedClass(openedClass ? '' : 'places__options--opened');

  return (
    <form
      style={{ userSelect: 'none' }}
      className="places__sorting"
      action="#"
      method="get"
      onClick={() => handleSortSelectClick()}
    >
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0}>
        {SortOption[activeSortOption]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${openedClass}`}>
        {Object.entries(SortOption).map((sortType) => (
          <li
            className={`${
              activeSortOption === sortType[0] ? 'places__option--active' : ''
            } places__option`}
            tabIndex={0}
            onClick={() => handleSortChange(sortType[0] as SortType)}
          >
            {sortType[1]}
          </li>
        ))}
      </ul>
    </form>
  );
}
