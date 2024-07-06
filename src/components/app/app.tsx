import HomePage from '../../screens/home-page/home-page';

type AppProps = {
  offersCount: number;
};

function App({offersCount}: AppProps): JSX.Element {
  return <HomePage offersCount={offersCount}/>;
}

export default App;
