import React from 'react'
import s from './NewPost.module.css'

function NewPost(){
    return ( 
    <div className={s.posts}>
        <h2>My Post</h2>
        <textarea className={s.new_post}></textarea>
        <button className={s.submit_button}>submit</button>
    </div>);
}

export default NewPost;