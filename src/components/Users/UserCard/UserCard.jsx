import React from 'react';
import s from './UserCard.module.css';
import userLogo from '../../../assets/images/defUser.jpeg';
import { NavLink } from 'react-router-dom';



let UserCard = (props) => {

    return (

        <div className={s.wrap}>

            <div className={s.left}>
                <NavLink to={'/profile/' + props.state.id}>
                    <img src={props.state.photos.small === null ? userLogo : props.state.photos.small} className={s.profile_img} />
                </NavLink>
                <button onClick={() => { props.followUserThunk(props.state.id, props.state.followed) }}> {props.state.followed === true ? 'unfollow' : 'follow'}</button>
            </div>
            <div className={s.right}>
                <span>{props.state.name}</span>
                <span>{props.state.status}</span>
                <span>{props.state.location}, <br></br>{props.state.location} </span>

            </div>
        </div>
    )
}

export default UserCard;