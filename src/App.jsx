import logo from "./logo.svg";
import "./App.css";
import GameBoard from "./components/GameBoard/GameBoard";
import SimonBtn from "./components/SimonBtn/SimonBtn";

function App() {
  return (
    <div className="App">
      <GameBoard>
        <SimonBtn color={"yellow"} disabled={false}/>
        <SimonBtn color={"blue"} disabled={false}/>
        <SimonBtn color={"red"} disabled={false}/>
        <SimonBtn color={"green"} disabled={false}/>
      </GameBoard>
    </div>
  );
}

export default App;

