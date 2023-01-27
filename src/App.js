import Home from "./components/Home"
import NavBar from "./components/NavBar";
import Shop from "./components/Shop";
import './App.css';

function App() {
  return (
      <div className="App">
          <NavBar />
          <Home />
          <Shop />
      </div>
  );
}

export default App;
