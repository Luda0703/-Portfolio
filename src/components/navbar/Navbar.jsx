import sun from './../../img/icons/sun.svg';
import moon from './../../img/icons/moon.svg';
import { NavLink } from 'react-router-dom';

import './style.css'

const Navbar = () => {
  const activLinc = 'nav-list__link nav-list__link--active';
  const normalLinc = 'nav-list__link';


  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to='/' className="logo">
          Portfolio
          </NavLink>

          <button className="dark-mode-btn">
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
          </button>

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink to='/' className={({isActive}) => {
                return isActive ? activLinc : normalLinc
              }}>
              Home
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to='/projects' className={({isActive}) => {
                return isActive ? activLinc : normalLinc
              }}>
              Projects
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to='/contacts' className={({isActive}) => {
                return isActive ? activLinc : normalLinc
              }}>
              Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
