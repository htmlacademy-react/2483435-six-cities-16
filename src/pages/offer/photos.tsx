import { useAppSelector } from '../../hooks/store';
import { activeSelectors } from '../../store/slices/active-slice';

export function Photos() {
  const activeOffer = useAppSelector(activeSelectors.activeOffer);

  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {activeOffer!.images.map((image) => (
          <div key={image} className="offer__image-wrapper">
            <img className="offer__image" src={image} alt="Photo studio" />
          </div>
        ))}
      </div>
    </div>
  );
}
