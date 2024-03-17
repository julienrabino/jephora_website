import React from 'react';
import './App.css';
import Homepage from './component/Homepage';
import Login from './component/Login';
import Productpage from './component/Productpage';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    
    <BrowserRouter>
       
      <Routes>
      <Route path = "/" element = {<Homepage />} />
      <Route path = "/Productpage" element = {<Productpage />}/>
      <Route path = "/Login" element = {<Login />} />
      </Routes>


      </BrowserRouter>


    
   
  );



}

export default App;
