import MainScreen from '../../pages/main-page/main-page';

type AppProps = {
  offersCount: number;
};

function App({offersCount}: AppProps): JSX.Element {
  return <MainScreen offersCount={offersCount}/>;
}

export default App;
