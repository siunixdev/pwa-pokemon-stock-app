import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Confirm from './pages/Confirm';
import Detail from './pages/Detail';
import Home from './pages/Home';

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='confirm' element={<Confirm />} />
          <Route path=':pokeId' element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
