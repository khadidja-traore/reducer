import React, {useReducer} from 'react';
import './App.css';
import ComponentA from './components/ComponentA';
import ComponentC from './components/ComponentC';
import ComponentUser from './components/ComponentUser';
import ComponentD from './components/ComponentD';
import ComponentF from './components/ComponentF';
import DataFetchingOne from './components/DataFetchingOne';
import DataFetchingAll from './components/DataFetchingAll';
import {UserConsumer, UserContext, UserProvider} from './components/userContext';
import DataFetchingAllReducer from './components/DataFetchingAllReducer';
import Form from './components/Form';


//useReducer
// const initialState = 0;
// const reducer = (state, action) =>{
//   switch (action) {
//     case 'Increment': 
//     return state+1
//       case 'Decrement': 
//       return state-1
//     case 'Reset': 
//       return initialState
//     default: 
//      return state
//     }
//   }
  
  export const CountContext = React.createContext();


  // //creation du contexte pour l'utilisateur 
  // export const UserContext = React.createContext('');
  // const UserProvider = UserContext.Provider;
  // const UserConsumer = UserContext.Consumer;

  // export {UserProvider, UserConsumer}




function App() {

  //const [count, dispatch] = useReducer(reducer, initialState);

  return (
    // <CountContext.Provider 
    // value={{countState: count, countDispatch: dispatch}}>

    // <div className="App">
    //   Count : {count}      
    //   <ComponentA />
    //   <ComponentD />
    //   <ComponentF />
    //   <DataFetchingOne />
    // </div>

    // </CountContext.Provider>


    // <UserContext.Provider username='Lili' >
    //     <ComponentC />

    //     {/* <DataFetchingAll /> */}

    // </UserContext.Provider>

    // <DataFetchingAll /> 
    // <DataFetchingAllReducer /> 

    <Form/>


  );
}

export default App;
