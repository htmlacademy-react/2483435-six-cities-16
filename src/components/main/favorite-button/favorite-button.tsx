import clsx from 'clsx';
import { BemClass } from '../../../const';

type FavoriteButtonProps = {
  bemBlock: string;
  isFavorite: boolean;
};

function FavoriteButton({ bemBlock, isFavorite }: FavoriteButtonProps) {
  const favoriteLabel = `${isFavorite ? 'In' : 'To'} bookmarks`;
  const favoriteClasses = clsx('button', `${bemBlock}__bookmark-button`, {
    [`${bemBlock}__bookmark-button--active`]: isFavorite,
  });

  const imgWidth = bemBlock === BemClass.Offer ? 31 : 18;
  const imgHeight = bemBlock === BemClass.Offer ? 33 : 19;

  return (
    <button className={favoriteClasses} type="button">
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
