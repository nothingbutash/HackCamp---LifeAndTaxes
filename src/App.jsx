import "./App.css";
import Event from "./components/Event";
import Meter from "./components/Meter";
import { useState } from "react";

function App() {
  const startingJoy = 40
  const startingMoney = 50
  const e1Msg = "The job you're working at right now is good, but it could be better. You recently got contacted by a company for a role that pays 7$/hour more! Only problem? It's your close childhood friend's dream job that will be their first job. What do you do?"
  const e1B1 = "Take the job."
  const e1B2 = "Don't take the job."

  const e2Msg = "You unexpectedly get offered 3 days off."
  const e2B1 = "Go shopping."
  const e2B2 = "Pass and go to work."

  const e3Msg = ""
  const e3B1 = ""
  const e3B2 = ""

  const e4Msg = ""
  const e4B1 = ""
  const e4B2 = ""

  const e5Msg = ""
  const e5B1 = ""
  const e5B2 = ""
  

  const [joyLevel, setJoyLevel] = useState(startingJoy)
  const [moneyLevel, setMoneyLevel] = useState(startingMoney)
  const events = [{image: "playerStrawHat.jpg", message: e1Msg, function1: , function2: , button1: e1B1, button2: e1B2, dJoyT: -joyLevel/2, dMoneyT: 7, dJoyF: 0, dMoneyF: 0},
                  {image: , message: e2Msg, function1: , function2: , button1: e2B1, button2: e2B2, dJoyT: , dMoneyT: , dJoyF: 0, dMoneyF: 0},
                  {image: , message: e3Msg, function1: , function2: , button1: e3B1, button2: e3B2, dJoyT: , dMoneyT: , dJoyF: 0, dMoneyF: 0},
                  {image: , message: e4Msg, function1: , function2: , button1: e4B1, button2: e4B2, dJoyT: , dMoneyT: , dJoyF: 0, dMoneyF: 0},
                  {image: , message: e5Msg, function1: , function2: , button1: e5B1, button2: e5B2, dJoyT: , dMoneyT: , dJoyF: 0, dMoneyF: 0}]

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
      <Event></Event>
    </div>
    
  );
}

export default App;
