import React from 'react';
import UseCallbackHook from './UseCallbackHook';
import UseContextHook from './UseContextHook';
import UseEffectHook from './UseEffectHook';
import UseStateHook from './UseStateHook';

const Hooks = props => {
    return (
        <div style={{textAlign: 'center'}}>
            <h2>Example of UseStateHook</h2>
            <UseStateHook />
            <h2>Example of UseEffectHook</h2>
            <UseEffectHook />
            <h2>Example of UseCallbackHook</h2>
            <UseCallbackHook />
            <h2>Example of UseContextHook</h2>
            <UseContextHook />
        </div>
    );
}

export default Hooks;