import React from 'react';
import { NavLink } from 'react-router-dom';
import cl from './Navbar.module.css';

const Navbar = (props) => {
  return (<nav className={cl.nav}>
    <div className={cl.item}>
      <NavLink to='/profile' activeClassName={cl.activeLinc}>Profile</NavLink>
    </div>

    <div className={cl.item}>
      <NavLink to='/dialogs' activeClassName={cl.activeLinc}>Messages</NavLink>
    </div>

    <div className={cl.item}>
      <NavLink to='./news' activeClassName={cl.activeLinc}>News</NavLink>
    </div>

    <div className={cl.item}>
      <NavLink to='./music' activeClassName={cl.activeLinc}>Music</NavLink>
    </div>

    <div className={cl.item}>
      <NavLink to='./settings' activeClassName={cl.activeLinc}>Settings</NavLink>
    </div>
  </nav>
  )
}
 export default Navbar;