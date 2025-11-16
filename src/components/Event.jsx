import "./Event.css";
import { useState } from "react";

function Event(props) {

  const events = [
    { message: "The job you're working at right now is good, but it could be better. You recently got contacted by a company for a role that pays 7$/hour more! Only problem? It's your close childhood friend's dream job that will be their first job. What do you do?",
      button1: "Take the job.",
      button2: "Don't take the job.",
      dJoyT: -props.joyLevel / 2, dMoneyT: 7,
      dJoyF: 0, dMoneyF: 0,
      image: "src/assets/playerNoHat.jpg"
    },

    { message: "You got into a car accident and your doctor says that you are fine but suggests more tests to be sure.",
      button1: "Get tested to be safe.",
      button2: "Don't get tested.",
      dJoyT: 10, dMoneyT: -50,
      dJoyF: -props.joyLevel / 2, dMoneyF: 0,
      image: "src/assets/car.jpg"
    },

    { message: "The opportunity to buy the world's only 24 karat gold labubu for $1,000,000 arises.",
      button1: "Buy it because you only have 5 seconds!",
      button2: "Don't.",
      dJoyT: 30, dMoneyT: -1000000,
      dJoyF: -5, dMoneyF: 0,
      image:"src/assets/goldenlabubu.jpg"
    },

    { message: "A friend wants to hang out on the day of a possible business trip with a big bonus!",
      button1: "Reject your friend, focus on work.",
      button2: "Go out with your friend.",
      dJoyT: -5, dMoneyT: 150,
      dJoyF: 15, dMoneyF: -150,
      image:"src/assets/playerStrawHat.jpg"
    },

    { message: "Your pet dog got sick, but you have to work.",
      button1: "Skip work and take your dog to the vet.",
      button2: "Ignore your dog and go to work.",
      dJoyT: 40, dMoneyT: -100,
      dJoyF: -60, dMoneyF: 100,
      image:"src/assets/dogSprite.jpg"
    }
  ];

  const [index, setIndex] = useState(0);
  const currentEvent = events[index];

  function chooseOption1() {
    props.setJoyLevel(props.joyLevel + currentEvent.dJoyT);
    props.setMoneyLevel(props.moneyLevel + currentEvent.dMoneyT);
    setIndex(index + 1);
    props.setAge(props.age + 12);
  }

  function chooseOption2() {
    props.setJoyLevel(props.joyLevel + currentEvent.dJoyF);
    props.setMoneyLevel(props.moneyLevel + currentEvent.dMoneyF);
    setIndex(index + 1);
    props.setAge(props.age + 12);
  }

  return (
    <div className="eventBox">
      <img src={currentEvent.image}/>
      <p class = "text">{currentEvent.message}</p>
      <button onClick={chooseOption1}>{currentEvent.button1}</button>
      <button onClick={chooseOption2}>{currentEvent.button2}</button>
    </div>
  );
}

export default Event;
