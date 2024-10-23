import './temper.css'
import Variable from "../Variable/Variable";
import { useEffect, useState } from "react";
function Temperatures() {

    const [celsius, setCelsius] = useState(25);
    const [fahrenheit, setFahrenheit] = useState(77);
    const [kelvin, setKelvin] = useState(298.15);

    useEffect(() => {
        const f = (celsius * 9/5) + 32;
        const k = celsius + 273.15;

        setFahrenheit(f);
        setKelvin(k);
    }, [celsius]);

    useEffect(() => {
        const c = (fahrenheit - 32) * 5/9;
        setCelsius(c);
    }, [fahrenheit]);

    useEffect(() => {
        const c = kelvin - 273.15;
        const f = (c * 9/5) + 32;
        setCelsius(c);
        setFahrenheit(f);
    }, [kelvin]);


    return ( 
        <div className='temper-container'>
            <h3 className='temper-title'>Temperatures</h3>
            <h3 className='temper-display'>
                <span className='badge bg-primary'>{celsius.toFixed(2)} C</span>
                 <span className='badge bg-primary'>{fahrenheit.toFixed(2)} F</span>
                 <span className='badge bg-primary'>{kelvin.toFixed(2)} K</span>
                 </h3>
            <div className='temper-variables'>
                <Variable  name={"Celsius"} value={celsius} setValue={setCelsius} />
                <Variable  name={"Fahrenheit"} value={fahrenheit} setValue={setFahrenheit} />
                <Variable  name={"Kelvin"} value={kelvin} setValue={setKelvin} />

            </div>
        </div>
     );
}

export default Temperatures
