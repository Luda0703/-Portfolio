
import { NavLink } from 'react-router-dom';

import './style.css'
import BtnDarkMode from 'components/btnDarkMode/BtnDarkMode';

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

          <BtnDarkMode/>

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
