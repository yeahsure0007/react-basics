import AxiosDemo from './Axios/AxiosDemo';
import JsxDemo from './Jsx/JsxDemo';
import Hooks from './Hooks/Hooks';
import { Fragment } from 'react';
import UserLoginContext from './context/AppContext';

const App = props => {
  return (
    <UserLoginContext.Provider value={{name: "Marcus", password: "abc"}}>
      <Hooks />
    </UserLoginContext.Provider>
  );
}

export default App;
