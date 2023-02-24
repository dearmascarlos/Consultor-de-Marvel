import React from 'react';
import './App.css';
import router from './routes';
import { RouterProvider } from 'react-router-dom';
import { createContext } from 'react';

export const infoContext = createContext({})

function App() {

  const [info, setInfo] = React.useState([])

  return (
    <infoContext.Provider value={{ info, setInfo }}>
    <div className="App">
      <RouterProvider router={router}/>
    </div>
    </infoContext.Provider>

  );
}

export default App;
