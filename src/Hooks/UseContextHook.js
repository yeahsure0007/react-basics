import React, { useContext } from 'react';
import UserLoginContext from '../context/AppContext';

/*
 Create context in a separate file and provide it in App.js.
 Use the same context here.
*/
const UseContextHook = props => {
    const userLoginInfo = useContext(UserLoginContext);
    return (
        <div>
            <p>Username is {userLoginInfo.name}</p>
            <p>Password is {userLoginInfo.password}</p>
        </div>
    );
}

export default UseContextHook;