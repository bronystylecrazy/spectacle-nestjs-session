import { Deck } from 'spectacle';
import defaultTheme from './theme/default';
import "./assets/style.css";
// const slides = [0].map((el) => require(`./slides/${el}.js`).default);

function importAll(r) {
  return r.keys().map(r).map(e => e.default);
}

const slides = importAll(require.context('./slides', false, /\.(js)$/));

function App() {
  return (
    <Deck theme={defaultTheme} progress="bar">
      { slides.map((Slide,idx) => <Slide key={idx}/>) }
    </Deck>
  );
}

export default App;