import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weater React App</h1>
        <Search />
        <br />
        <p>
          coded&nbsp;
          <a
            href="https://github.com/Rojahm/weather-react-v3"
            target="_blank"
            rel="noreferrer"
          >
            OpenScource
          </a>
          &nbsp;by Ro?a
        </p>
      </header>
    </div>
  );
}

export default App;
