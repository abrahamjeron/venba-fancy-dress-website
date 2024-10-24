import { useState } from 'react';
import './App.css';
import Landing from "./landingpage"
import Thankyou from "./thanyoupage"
import { Route, Routes, Navigate } from 'react-router-dom';
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/thankyou" element={<Thankyou />} />
    </Routes>
    </>
  );
}

export default App;
