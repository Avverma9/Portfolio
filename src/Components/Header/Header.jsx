import React from 'react';
import './Header.css'

const Header = () => {
  const menuItems = [
    { id: 1, label: 'Home', url: '/' },
    { id: 3, label: 'Project', url: '/project' },
    { id: 2, label: 'Skills', url: '/skills' },
    { id: 4, label: 'Contact', url: '/contact' },
    { id: 5, label: 'Resume', url: 'https://drive.google.com/file/d/16Mb2eVytSJB-_1CzxLMYqx1JZGGsqCUS/view?usp=share_link' },
  ];

  return (
    <header className="header-header">
      <nav className="navbar-header">
        <ul className="menu-header">
          {menuItems.map((item) => (
            <li key={item.id}>
              <a href={item.url}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
