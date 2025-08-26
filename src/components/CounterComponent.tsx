import {useState} from "react";

export const CounterComponent = ()=>  {
    let [counter, setCounter] = useState<number>(0);
    return(
        <div>
            <h2>{counter}</h2>
            <button onClick={() => {
                setCounter(++counter);
            }}
            >
                increment
            </button>
            <button onClick={() => {
                setCounter(--counter);
            }}
            >
                decrement
            </button>
        </div>
    )
}
