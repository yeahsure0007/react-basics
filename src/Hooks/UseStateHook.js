import React, { useState } from 'react';

/*
 Use the counter example.
 And the input name example.
*/
const UseStateHook = props => {
    const [counter, setCounter] = useState(0);
    const [person, setPerson] = useState({name: 'CVR', marks: 900});

    const updateName = (event) => {
        const updatedState = {
            ...person,
            name: event.target.value
        }

        setPerson(updatedState);
    }

    return (
        <div>
            <p>Counter value : {counter}</p>
            <button onClick={() => setCounter(prevCounter => prevCounter + 1)}>Click counter</button>
            <p>Name is {person.name} and marks are {person.marks}</p>
            <input type="text" onChange = {(event) => updateName(event)} />
        </div>
    );
}

export default UseStateHook;