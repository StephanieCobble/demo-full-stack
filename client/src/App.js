import "./App.css";

import CardItem from "./components/Card.jsx";
import NavBar from "./components/MainNav/NavBar.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <CardItem />
      </div>
    </div>
  );
}

export default App;
