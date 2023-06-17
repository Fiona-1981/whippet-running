import React from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from './components/HomePage';
import MenuPage from './components/MenuPage';

const App = () => {
  const navigate = useNavigate();

  return (
    <div>

      <Routes>
        <Route path="/" element={<HomePage navigate={navigate} />} />
        <Route path="/menu" element={<MenuPage navigate={navigate} />} />
      </Routes>

    </div>
  );

};

export default App;
