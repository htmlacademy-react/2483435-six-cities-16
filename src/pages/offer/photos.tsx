import { useAppSelector } from '../../hooks/store';

export function Photos() {
  const currentOffer = useAppSelector((state) => state.interplay.activeOffer);
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {currentOffer!.images.map((image) => (
          <div key={image} className="offer__image-wrapper">
            <img className="offer__image" src={image} alt="Photo studio" />
          </div>
        ))}
      </div>
    </div>
  );
}
