import './App.css';
import heman from './assets/heman.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={heman} alt="logo" />
        <p>
          LOOKIE LOOKIE!
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=-nb9wXYXqCQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Become IMB4
        </a>
      </header>
    </div>
  );
}

export default App;
