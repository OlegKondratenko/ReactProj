import React from 'react'
import s from './Post.module.css'


function Post(props) {
    return (
        <div className={s.wrap}>
            <img className={s.photo} src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR6HbgiUNqMI1BjuvIUWK9GtQXalH_PctM_kQ&usqp=CAU' />
            <div className={s.text}>{props.message}</div>
            <p>Likes: {props.likesCount}</p>
            <div>
                <p>Name: {props.name || 'Do not authorised'}</p>
                <p>Age: {props.age || 'unknown'}</p>
            </div>
        </div>
    );
}

export default Post;