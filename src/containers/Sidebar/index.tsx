import React from 'react';
import { Home, Package, List, Camera, Settings } from 'react-feather';
import styles from './Sidebar.module.css';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { icon: <Home  />, label: 'Home', path: '/dashboard' },
  { icon: <Package  />, label: 'Agenda', path: '/agenda' },
  { icon: <List  />, label: 'Registro', path: '/register' },
  { icon: <Camera  />, label: 'Historia Clinica', path: '/history' },
  { icon: <Settings />, label: 'Setting', path: '/setting' },
];

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className={styles.container}>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index} className={currentPath.includes(item.path) ? styles.active : ''}>
            <Link to={item.path}>
              {item.icon}
              <p>{item.label}</p>
            </Link>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
