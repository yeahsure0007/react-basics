import React, {useCallback, useState} from 'react';

/*
 This hook is useful when you have a component with a child frequently re-rendering, and you pass a callback to it.
 The problem here is that any time the counter is updated, all the 3 functions are re-created again.
 You can visualize this by instantiating a Set data structure, and adding each function to it. Why Set?
 because it only stores unique elements, which in our case means different (uniquely instantiated) functions.

 What should happen instead it’s that if you increment one counter, all functions related to that counter should be re-instantiated.
 If another state value is unchanged, it should not be touched.
*/
const functionsCounter = new Set();

const UseCallbackHook = props => {
    const [count, setCount] = useState(0)
    const [otherCounter, setOtherCounter] = useState(0)

    const increment = useCallback(() => {
        setCount(count + 1)
    }, [count]);

    const decrement = useCallback(() => {
        setCount(count - 1)
    }, [count]);

    const incrementOtherCounter = useCallback(() => {
        setOtherCounter(otherCounter + 1)
    }, [otherCounter]);

    functionsCounter.add(increment);
    functionsCounter.add(decrement);
    functionsCounter.add(incrementOtherCounter);

    console.log(functionsCounter);
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={incrementOtherCounter}>incrementOtherCounter</button>
        </div>
    );
}

export default UseCallbackHook;