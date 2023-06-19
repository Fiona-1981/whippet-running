import React from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from './components/HomePage';
import MenuPage from './components/MenuPage';
import Annus2023 from './components/Annus2023';
import AddRace from './components/AddRace';

const App = () => {
  const navigate = useNavigate();

  return (
    <div>

      <Routes>
        <Route path="/" element={<HomePage navigate={navigate} />} />
        <Route path="/menu" element={<MenuPage navigate={navigate} />} />
        <Route path="/2023" element={<Annus2023 navigate={navigate} />} />
        <Route path="/addrace" element={<AddRace navigate={navigate} />} />
      </Routes>

    </div>
  );

};

export default App;
