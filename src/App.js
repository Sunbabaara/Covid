
import Header from "./components/Header";
import './App.css';
import Stats from "./components/Stats";
import CountrySelector from "./components/CountrySelector";

function App() { 
  return (
    <div className="App">
      <Header/>
      <h1>Global summary</h1>
      <Stats url="https://covid19.mathdro.id/api"/>
      <CountrySelector/>
    </div>
  );
}

export default App;
