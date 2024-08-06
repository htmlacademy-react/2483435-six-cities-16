import ShowLoading from '../../components/main/show-loading';
import { useAppSelector } from '../../hooks/store';
import { activeSelectors } from '../../store/slices/active-slice';



export function Photos() {
  const activeOffer = useAppSelector(activeSelectors.activeOffer);

  if (!activeOffer) {
    return <ShowLoading/>
  }

  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {activeOffer.images.map((image:string) => (
          <div key={image} className="offer__image-wrapper">
            <img className="offer__image" src={image} alt="Photo studio" />
          </div>
        ))}
      </div>
    </div>
  );
}
