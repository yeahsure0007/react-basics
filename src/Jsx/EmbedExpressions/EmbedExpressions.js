import React from 'react';
import JsxStyles from './EmbedExpressions.module.css';

/*
 An example of embedding expressions. Use firstName + lastName example
*/
const EmbedExpressions = props => {
    const user = {
        firstName: 'CVR',
        lastName: 'College'
    }

    const formatName = (user) => {
        return user.firstName + " " + user.lastName;
    }
    return (
        <div className={JsxStyles.JsxStyle}>
            <p>Hi my name is {formatName(user)}</p>
        </div>
    );
}

export default EmbedExpressions;