import type { OfferType } from '../../types/offer-type';

type PhotosProps = {
  activeOffer: OfferType;
};

function Photos({ activeOffer }: PhotosProps) {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {activeOffer.images.slice(0, 6).map((image: string) => (
          <div key={image} className="offer__image-wrapper">
            <img className="offer__image" src={image} alt="Photo studio" />
          </div>
        ))}
      </div>
    </div>
  );
}
export { Photos };
