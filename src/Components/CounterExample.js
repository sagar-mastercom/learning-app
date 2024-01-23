import React, { useState } from 'react';

function CounterExample (props) {
    const [counter, setCounter] = useState(0)
    return (
        <div>
            <h1> CounterExample {counter}</h1>
            <button onClick={()=>setCounter(counter+1)}>Increase Counter</button> <button onClick={()=>setCounter(counter-1)}>Decrease Counter</button>
            <div>
            <button onClick={()=>setCounter(0)}>Reset Counter</button>
            </div>
        </div>
    )
}
export default CounterExample