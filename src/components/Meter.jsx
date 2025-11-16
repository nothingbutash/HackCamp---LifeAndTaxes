import "./Meter.css";

function Meter(props) {
  return (
    <div className="meter-container" style={{ left: `${props.place * 220}px` }}>
      <div
        className="meter-bar"
        style={{
          width: `${props.value * 5}px`,
          backgroundColor: props.colour,
        }}
      >
        <span className="meter-text">
          {props.type}: {props.value}
        </span>
      </div>
    </div>
  );
}

export default Meter;
