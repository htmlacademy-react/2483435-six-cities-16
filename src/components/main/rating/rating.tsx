import { CSSProperties } from 'react';

type RatingProps = {
  prefix: string;
  rating: number;
  showValue?: boolean;
};

const getRatingStyle = (rating: number): CSSProperties => ({
  width: `${Math.round(rating) * 20}%`,
});

const Rating = ({ prefix, rating, showValue = false }: RatingProps) => (
  <div className={`${prefix}__rating rating`}>
    <div className={`${prefix}__stars rating__stars`}>
      <span style={getRatingStyle(rating)} />
      <span className="visually-hidden">Rating</span>
    </div>
    {showValue && (
      <span className={`${prefix}__rating-value rating__value`}>
        {rating.toFixed(1)}
      </span>
    )}
  </div>
);

export { Rating };
