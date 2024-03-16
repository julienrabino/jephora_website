import React from 'react';
import './App.css';
import Homepage from './component/Homepage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    
    <BrowserRouter>
      

      <Routes>
      <Route path = "/Homepage" element = {<Homepage />} />
      {/* <Route path = "/Productpage" element = {<Productpage />}/> */}
      </Routes>


      </BrowserRouter>


    
   
  );



}

export default App;
