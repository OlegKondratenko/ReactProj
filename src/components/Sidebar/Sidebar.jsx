import React from 'react';
import s from './Sidebar.module.css';
import { NavLink } from 'react-router-dom';

function Sidebar(props) {



  function Friend(props) {
    return (
      <div className={s.friend} >
        <img alt='profile_logo' className={s.friend_logo} src={props.state.url_photo} />
        <p className={s.friend_name}>{props.state.name}</p>
      </div>
    )
  }
  let SectionItem = (props) => {
    return (<div className={s.item} >
      <NavLink to={props.state.sectionLink} activeClassName={s.active} >{props.state.sectionName}</NavLink>
    </div>)
  }

  let sectionList = props.state.sectionList.map(elem => <SectionItem key={elem.id} state={elem} />)
  let friends = props.state.friends.map(e => <Friend key={e.id} state={e} />)

  return (
    <div className={s.sidebar}>
      <nav className={s.navigation}>
        {sectionList}
      </nav>
      <div className={s.friend_wrap}>
        {friends}
      </div>
    </div>
  );
}

export default Sidebar;