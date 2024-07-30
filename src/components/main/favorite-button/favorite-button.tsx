import clsx from 'clsx';

const OFFER_CLASS_NAME = 'offer';

type FavoriteButtonProps = {
  className: string;
  isFavorite: boolean;
};

function FavoriteButton({ className, isFavorite }: FavoriteButtonProps) {
  const favoriteLabel = `${isFavorite ? 'In' : 'To'} bookmarks`;
  const favoriteClasses = clsx('button', `${className}__bookmark-button`, {
    [`${className}__bookmark-button--active`]: isFavorite,
  });

  const imgWidth = className === OFFER_CLASS_NAME ? 31 : 18;
  const imgHeight = className === OFFER_CLASS_NAME ? 33 : 19;

  return (
    <button className={favoriteClasses} type="button">
      <svg
        className={`${className}__bookmark-icon`}
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
