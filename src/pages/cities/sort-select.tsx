import { useState } from 'react';
import { useActionCreators, useAppSelector } from '../../hooks/store';
import {
  activeActions,
  activeSelectors,
} from '../../store/slices/active-slice';

export const SortOption = {
  Popular: 'Popular',
  PriceLowToHigh: 'Price: low to high',
  PriceHighToLow: 'Price: high to low',
  TopRatedFirst: 'Top rated first',
};

type SortType = keyof typeof SortOption;

export function SortSelect() {
  const activeSortOption = useAppSelector(activeSelectors.sortOption);
  const { setSortOption } = useActionCreators(activeActions);

  const [openedClass, setOpenedClass] = useState('');

  const handleSortChange = (evt:Eve) => {
    setSortOption(sortType);
  };

  const handleSortSelectClick = () =>
    setOpenedClass(openedClass ? '' : 'places__options--opened');

  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
      onClick={() => handleSortSelectClick()}
      onChange={() => handleSortChange()}
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
          >
            {sortType[1]}
          </li>
        ))}
        {/* <li className="places__option places__option--active" tabIndex={0}>
          Popular
        </li>
        <li className="places__option" tabIndex={0}>
          Price: low to high
        </li>
        <li className="places__option" tabIndex={0}>
          Price: high to low
        </li>
        <li className="places__option" tabIndex={0}>
          Top rated first
        </li> */}
      </ul>
    </form>
  );
}
