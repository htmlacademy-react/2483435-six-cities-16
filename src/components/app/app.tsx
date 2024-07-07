import HomePage from '../../pages/home-page/home-page';
import { AppProps } from '../../types/app-props-type';

function App({offersCount}: AppProps): JSX.Element {
  return <HomePage offersCount={offersCount}/>;
}

export default App;
