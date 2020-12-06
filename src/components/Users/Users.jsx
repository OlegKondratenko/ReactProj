import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import UserCard from './UserCard/UserCard';
import s from './Users.module.css'

let Users = ({ onPageChanged, currentPage, totalUsersCount, pageSize, usersData, ...props }) => {
    return (
        <div className={s.usersWrapper}>
            <Paginator onPageChanged={onPageChanged} currentPage={currentPage}
                totalUsersCount={totalUsersCount} pageSize={pageSize} portionSize={10} />
            <div className={s.userCardsWrapper}>
                {usersData.map((el) => {
                    return (
                        <UserCard className={s.userCard} state={el} key={el.id}
                            isFetching={props.isFetching}
                            follow={props.follow}
                            followUserThunk={props.followUserThunk} />)
                })}
            </div>

        </div>)

}


export default Users;