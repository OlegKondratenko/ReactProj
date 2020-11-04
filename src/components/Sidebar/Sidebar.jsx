import React from 'react';
import s from './Sidebar.module.css';
import { NavLink } from 'react-router-dom';

function Sidebar(props) {
  return (
    <div className={s.sidebar}>
      <nav>
        <div className={s.item}><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></div>
        <div className={s.item}><NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink></div>
        <div className={s.item}><NavLink to='/123' activeClassName={s.active}>News</NavLink></div>
        <div className={s.item}><NavLink to='/1223' activeClassName={s.active}>Music</NavLink></div>
        <div className={s.item}><NavLink to='/dia123logs' activeClassName={s.active}>Settings</NavLink></div>
      </nav>
    </div>
  );
}

export default Sidebar;