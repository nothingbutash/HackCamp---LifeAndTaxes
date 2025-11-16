import "./Meter.css";

function Meter(props) {
  return (
    <div>
      <div className="meter"
        style={{ height: `${props.value * 5}px`,
        backgroundColor: `${props.colour}`,
        left: `${110 * props.place - 100}px` }}>
        <h2>{props.type} Meter: {props.value}</h2>
      </div>
    </div>
  );
}

export default Meter;