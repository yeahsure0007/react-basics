import React from 'react';
import JsxStyles from './ClassNameRestriction.module.css';

/*
 Mention about the camel casing of html attributes in Jsx.(readOnly, tabIndex)
*/
const JsxClassNameRestriction = props => {
    const value = false;
    return (
        <div className={JsxStyles.JsxClass} style={{color: 'green'}}>
            <h1>The html class attribute is used as "className" in React</h1>
            <input readOnly={value} />
        </div>
    );
}

export default JsxClassNameRestriction;