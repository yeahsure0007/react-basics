import React, { useEffect, useState } from 'react';
import axios from 'axios';

/*
 Use axios to fetch data and console log it.
 Explain how it will end up in continuous loop using a counter state.
 Explain how it can act as componentDidMount
 Explain the dependencies
*/
const UseEffectHook = props => {

    const [counter, setCounter] = useState(0);
    const [otherCounter, setOtherCounter] = useState(0);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                console.log(response);
                setCounter(prevCounter => prevCounter + 1);
            });
    }, []);

    useEffect(() => {
        console.log('Other counter updated');
    }, [otherCounter]);

    return (
        <div>
            <p>Loaded times: {counter}</p>
            <button onClick={() => setOtherCounter(prevCounter => prevCounter + 1)}>Other counter incr</button>
        </div>
    );
}

export default UseEffectHook;