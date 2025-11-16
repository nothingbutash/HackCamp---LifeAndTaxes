import "./Event.css";

function Event(props) {
  return (
    <div> 
      <div className="item">
        <img src={props.image} className="logo" />
        <h2>{props.message}</h2>
        <button onClick={props.function1}>{props.button1}</button>
        <button onClick={props.function2}>{props.button2}</button>
        
      </div>
      
    </div>
  );
}

export default Event;