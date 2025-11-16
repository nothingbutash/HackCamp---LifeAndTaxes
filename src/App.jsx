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

  const e2Msg = "You got into a car accident and your doctor says that you are fine but suggests more tests to be sure."
  const e2B1 = "Get tested to be safe."
  const e2B2 = "Don't get tested."

  const e3Msg = "The opportunity to buy the world's only 24 karat gold labubu for $1,000,000 arises."
  const e3B1 = "Buy it because you only have 5 seconds!"
  const e3B2 = "Don't"

  const e4Msg = "A friend wants to hang out on the day of a possible business trip with a big bonus!"
  const e4B1 = "Reject your friend, you need to focus on work."
  const e4B2 = "Go out with your friend and forget about work for a day."

  const e5Msg = "Your pet dog got sick, but you have to work."
  const e5B1 = "Skip work to take your dog to the vet."
  const e5B2 = "Ignore your dog and go to work."
  

  const [joyLevel, setJoyLevel] = useState(startingJoy)
  const [moneyLevel, setMoneyLevel] = useState(startingMoney)
  const events = [{image: "./assets/playerStrawHat.jpg", message: e1Msg, button1: e1B1, button2: e1B2, dJoyT: -joyLevel/2, dMoneyT: 7, dJoyF: 0, dMoneyF: 0},
                  {image: "./assets/doctor.jpg", message: e2Msg, button1: e2B1, button2: e2B2, dJoyT: 10, dMoneyT: -50, dJoyF: -joyLevel/2, dMoneyF: 0},
                  {image: "./assets.goldenlabubu.jpg", message: e3Msg, button1: e3B1, button2: e3B2, dJoyT: 30, dMoneyT: -1000000, dJoyF: -5, dMoneyF: 0},
                  {image: "./assets.playerStrawHat.jpg", message: e4Msg, button1: e4B1, button2: e4B2, dJoyT: -5, dMoneyT: 150, dJoyF: 15, dMoneyF: -150},
                  {image: "./assets.dogSprite.jpg", message: e5Msg, button1: e5B1, button2: e5B2, dJoyT: 40, dMoneyT: -100, dJoyF: -60, dMoneyF: 100}]

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
