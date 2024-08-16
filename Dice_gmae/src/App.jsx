import { Outlet } from "react-router-dom";
import "./App.css";
import GameDice from "./Components/GameDice";

function App() {
  return <>
  <GameDice/>
  <Outlet/>
  </>;
}

export default App;
