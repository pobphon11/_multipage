import "./Variable.css";
import { useState } from "react";
function Variable({type, name, value, setValue}) {
  //     read     write     initial
//   const [value, setValue] = useState(props.value);


  return (
    <div className="counter-container">
      <h3 className="counter-title">{name || 'Variable'}</h3>
      <button className="btn btn-danger" onClick={() => setValue(value - 1)}>
        -
      </button>
      <span className="counter-value">{type && type === 'int' ? value : value.toFixed(2) }</span>
      <button className="btn btn-success" onClick={() => setValue(value + 1)}>
        +
      </button>
    </div>
  );
}

export default Variable;
