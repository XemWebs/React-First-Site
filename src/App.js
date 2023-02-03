import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './style.css';
import PageComponent from './views/Recettes';
import Navigation from './components/Navigation/Navigation';
import LesRecettes from './views/Gestion';
export default function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<PageComponent />} />
        <Route path="/Gestion" element={<LesRecettes />} />
      </Routes>
    </div>
  );
}
