import './App.css';
import Calculator from './components/Calculator';

const state = { temp: 0, scale: 'c' };
function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{`${state.temp} ${state.scale} `}</h1>
        <Calculator />
      </header>
    </div>
  );
}

export default App;
