import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="app-cont">
        <form>
          <input type="text" placeholder="city.." />
          <input type="text" placeholder="country.." />
          <button type="submit">get weather</button>
        </form>
        <div className="weather-results">
          <ul>
            <li className="info">
              <span className="info-key">temp:</span>
              <span className="info-val">22</span>
            </li>
            <li className="info">
              <span className="info-key">temp:</span>
              <span className="info-val">22</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
