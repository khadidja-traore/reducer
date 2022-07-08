import React from 'react';
import {Routes, Route} from 'react-router-dom'


import './App.css';


import DataFetchAllReducer from './components/DataFetchAllReducer';
import DataFetchingAll from './components/DataFetchingAll';
// import ComponentA from './components/ComponentA';
// import ComponentC from './components/ComponentC';
// import { UserProvider } from './components/userContext';
// import ComponentD from './components/ComponentD';
// import ComponentF from './components/ComponentF';
import DataFetchingOne from './components/DataFetchingOne';
import Form from './components/Form';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';
import Profile from './components/Profile/Profile';
import Developpement from './components/Services/Developpement/Developpement';
import Marketing from './components/Services/Marketing/Marketing';
import Services from './components/Services/Services';

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
  
  // export const CountContext = React.createContext();
function App() {

  // const [count, dispatch] = useReducer(reducer, initialState);

  return (

    

    <div className="App">
      {/* Count : {count}      
      <ComponentA />
      <ComponentD />
      <ComponentF /> */}
      {/* <DataFetchingOne /> */}
      {/* <UserProvider value="fred">
        <ComponentC/>
      </UserProvider> */}

      {/* <DataFetchingAll /> */}
      {/* <Form />
      <DataFetchAllReducer /> */}

      <Navbar/>


      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/services" element={<Services/>} >

            <Route path="/services/developpement" element={<Developpement/>} />
            <Route path="/services/marketing" element={<Marketing/>} />

        </Route>
        <Route path="/profile/:id" element={<Profile   />} />
        <Route path="/*" element={<NotFound />} />
      
      
      </Routes>
      {/* <Form />
      <DataFetchingAll />  */}
    

    </div>

  );
}

export default App;
