import { Offer } from '../../types/offer-type';

type PhotosProps = {
  currentOffer: Offer;
};
export function Photos({ currentOffer }: PhotosProps) {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {currentOffer.images.map((image) => (
          <div key={image} className="offer__image-wrapper">
            <img className="offer__image" src={image} alt="Photo studio" />
          </div>
        ))}
      </div>
    </div>
  );
}
