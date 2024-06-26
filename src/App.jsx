import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './Home';
import Chips from './Chips';
import Soda from './Soda';
import Sardines from './Sardines';
import NavBar from './NavBar';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/chips' element={<Chips />} />
            <Route path='/soda' element={<Soda />} />
            <Route path='/sardines' element={<Sardines />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
