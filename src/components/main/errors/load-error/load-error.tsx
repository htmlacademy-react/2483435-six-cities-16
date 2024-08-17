import { useAppSelector } from '../../../../hooks/store';
import { errorSelectors } from '../../../../store/slices/error-slice';
import css from './style.module.css';

function ErrorLoad() {
  const errorsLoad = useAppSelector(errorSelectors.loadError);

  const handleClick = () => {
    window.location.reload();
  };

  function errorMessage() {
    return (
      <>
        {Object.values(errorsLoad).map((error) => (
          <tr key={crypto.randomUUID()}>
            <td>
              <div className={css.message}>{error}</div>
            </td>
          </tr>
        ))}
      </>
    );
  }

  return (
    <div className={css.background}>
      <table>
        <tr>
          <th>
            <div className={css.title}>Error</div>
          </th>
        </tr>
      </table>

      <table>
        <tr>{errorMessage()}</tr>
        <tr>
          <td></td>
        </tr>
        <tr>
          <button
            className={css.home}
            onClick={() => handleClick()}
            type="button"
          >
            Попробовать ещё раз
          </button>
        </tr>
      </table>
    </div>
  );
}

export { ErrorLoad };
