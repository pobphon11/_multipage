import Variable from "../Variable/Variable";
import "./Add.css";
import { useState } from "react";
function Add({aValue, bValue}) {
  const [a, setA] = useState(aValue || 0);
  const [b, setB] = useState(bValue || 0);


  return (
    <div className="add-container">
      <h3 className="add-title">ADD</h3>
      <h2 className="add-display">
        <span className="badge bg-secondary" >A={a}</span>
       <span className="badge bg-primary"> A+B= {a + b}</span>
       <span className="badge bg-secondary"> B= {b}</span>
      </h2>
      <div className="add-variables">
        <Variable type={"int"} name={"A"} value={a} setValue={setA} />
        <Variable type={"int"} name={"B"} value={b} setValue={setB} />
      </div>
    </div>
  );
}

export default Add;
