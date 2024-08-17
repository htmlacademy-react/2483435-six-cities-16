import { ErrorLoad } from '../../components/main/errors/load-error/load-error';
import { useAppSelector } from '../../hooks/store';
import { errorSelectors } from '../../store/slices/error-slice';
import { Router } from '../router/router';

function App() {
  const error = useAppSelector(errorSelectors.loadError);
  const isError = Object.keys(error).length !== 0;

  return (
    <>
      {isError && <ErrorLoad />}
      <Router />;
    </>
  );
}

export { App };
