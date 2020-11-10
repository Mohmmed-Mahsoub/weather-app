import "./App.css";
import Form from "./components/Form";
import WeatherResults from "./components/WeatherResults";
function App() {
  return (
    <div className="App">
      <div className="app-cont">
        <Form />
        <WeatherResults />
      </div>
    </div>
  );
}

export default App;
