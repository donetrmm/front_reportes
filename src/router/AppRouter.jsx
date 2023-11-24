import React from 'react';
import { Route, Routes } from 'react-router-dom';
import InicioDeSesion from '../pages/Login/Login';
import HomeAdm from '../pages/home/Home';
import LoungeFinishi from '../pages/Lounge/LoungeHome';

function AppRouter() {
  return (
    <Routes>
      <Route path="/InicioDeSesion" element={<InicioDeSesion/>} />
      <Route path='/HomeAdm' element={<HomeAdm />} />
      <Route path='/LoungeFinishi' element={<LoungeFinishi />} />
    </Routes>
  );
}

export default AppRouter;
