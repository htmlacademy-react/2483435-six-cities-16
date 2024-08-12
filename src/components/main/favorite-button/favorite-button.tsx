import clsx from 'clsx';
import { BemClass } from '../../../const';
import { AllOffersType } from '../../../types/offer-type';
import { useState } from 'react';
import { dispatch } from '../../../store/store';
import { fetchSetFavoriteAction } from '../../../store/api-actions/offers-actions';

type FavoriteButtonProps = {
  bemBlock: BemClass;
  isFavorite: boolean;
  offer: AllOffersType
};

function FavoriteButton({ bemBlock, isFavorite, offer }: FavoriteButtonProps) {
  const favoriteLabel = `${isFavorite ? 'In' : 'To'} bookmarks`;
  const favoriteClasses = clsx('button', `${bemBlock}__bookmark-button`, {
    [`${bemBlock}__bookmark-button--active`]: isFavorite,
  });


  const handleFavoriteButtonClick = (offer:AllOffersType) => {
    let status: 1 | 0 = 1;
    offer.isFavorite ? (status = 0) : (status = 1);
    dispatch(fetchSetFavoriteAction({ offer, status }));
  };


  const imgWidth = bemBlock === BemClass.Offer ? 31 : 18;
  const imgHeight = bemBlock === BemClass.Offer ? 33 : 19;

  return (
    <button
      className={favoriteClasses}
      type="button"
      onClick={()=>handleFavoriteButtonClick(offer)}
    >
      <svg
        className={`${bemBlock}__bookmark-icon`}
        width={imgWidth}
        height={imgHeight}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{favoriteLabel}</span>
    </button>
  );
}

export { FavoriteButton };
