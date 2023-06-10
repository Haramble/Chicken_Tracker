import React, {useState} from "react";

function Counter() {
    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        setNumber(a => a + 1);
        console.log(number);
    }

    const onDecrease = () => {
        setNumber(b => b - 1);
        console.log('-1');
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;
