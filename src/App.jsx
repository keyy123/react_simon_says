import logo from "./logo.svg";
import "./App.css";
import GameBoard from "./components/GameBoard/GameBoard";

function App() {
  return (
    <div className="App">
      <GameBoard />
        {/* <SimonBtn color={"yellow"} disabled={false}/>
        <SimonBtn color={"blue"} disabled={false}/>
        <SimonBtn color={"red"} disabled={false}/>
        <SimonBtn color={"green"} disabled={false}/> */}
    </div>
  );
}

export default App;

