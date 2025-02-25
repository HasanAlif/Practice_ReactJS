import { useState } from "react";

export default function Counter(){
    let [count, setCount] = useState(0);

    let incCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h3>Counter = {count}</h3>
            <button onClick={incCount}>Increment</button>
        </div>
    );
}