import "./App.css";
import Event from "./components/Event";
import Meter from "./components/Meter";
import { useState } from "react";

function App() {
  const startingJoy = 40
  const startingMoney = 50
  const startingAge = 18
  const maximumAge = 23

  const [age, setAge] = useState(startingAge)
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
      <h1>LIFE AND TAXES</h1>
      <Meter type="Joy" value={joyLevel} colour="red" place={1} />
      <Meter type="Money" value={moneyLevel} colour="green" place={2} />
      <h2>Age: {age}</h2>
      <h2> Life Expectancy: {maximumAge} </h2>
      <Event joyLevel={joyLevel} setJoyLevel={setJoyLevel} moneyLevel={moneyLevel}
      setMoneyLevel={setMoneyLevel} age={age} setAge={setAge}/>
    </div>    
  );
}

export default App;
