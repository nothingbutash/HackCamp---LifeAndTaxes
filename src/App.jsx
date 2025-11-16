import "./App.css";
import Meter from "./components/Meter";
import { useState } from "react";

function App() {
  const startingJoy = 40
  const startingMoney = 50
  

  const [joyLevel, setJoyLevel] = useState(startingJoy)
  const [moneyLevel, setMoneyLevel] = useState(startingMoney)

  //Add the given amount to joyLevel
  function addJoy(num) {
    setJoyLevel(joyLevel + num)
  }

  //Add the given amount to moneyLevel
  function addMoney(num) {
    setMoneyLevel(moneyLevel + num)
  }

  return (
    <div className="app">
      <h1>GAME NAME HERE</h1>
      <Meter type="Joy" value={joyLevel} colour="red" place={1} />
      <Meter type="Money" value={moneyLevel} colour="green" place={2} />
      <h2>Age: {}</h2>
    </div>
  );
}

export default App;
