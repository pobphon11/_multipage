import './Counter.css'
import { useState } from 'react';
function Counter(props) {
    
    //     read     write     initial
    const [value, setValue] = useState(props.value);
    let name = 'Counter';

    function increment() {
        setValue (value + 1);
       
    }

    function decrment() {
        setValue (value - 1);
        
    }



    
   
    return ( 
            <div className='counter-container'>
                <h3 className='counter-title'>{name}</h3>
                <button className='btn btn-danger' onClick={decrment}>-</button>
                <span className='counter-value'>{value}</span>
                <button className='btn btn-success' onClick={increment}>+</button>
            </div>

     );
}


export default Counter;