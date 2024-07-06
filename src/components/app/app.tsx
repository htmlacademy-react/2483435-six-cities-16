import HomeScreen from '../../screens/home-screen/home-screen';

type AppProps = {
  offersCount: number;
};

function App({offersCount}: AppProps): JSX.Element {
  return <HomeScreen offersCount={offersCount}/>;
}

export default App;
