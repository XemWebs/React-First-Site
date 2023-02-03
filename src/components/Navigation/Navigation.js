import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';
const Navigation = () => {
  return (
    <nav >
      <ul>
        <li >
          <NavLink className="Navlink" to="/Gestion">Vos Recettes</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
