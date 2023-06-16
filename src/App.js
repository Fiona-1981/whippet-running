import React from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from './components/HomePage';

const App = () => {
  const navigate = useNavigate();

  return (
    <div>

      <Routes>
        <Route path="/" element={<HomePage navigate={navigate} />} />
      </Routes>

    </div>
  );

};

export default App;
