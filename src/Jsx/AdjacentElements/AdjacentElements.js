import React, { Fragment } from 'react';
import JsxStyles from './AdjacentElements.module.css';

/*
Define two adjacent html elements under the root element.
*/
const JsxAdjacentElements = props => {
    return (
        <div>
            <h1>Hi I am the first element.</h1>
            <p>Hello, I am the second adjacent elemet</p>
            <p>Adjcaent elements needs to be composed under a root element</p>
        </div>
    );
}

export default JsxAdjacentElements;