import React from 'react';
import styles from './Profile.module.css';
import NewPost from './MyPosts/NewPost/NewPost'
import Post from './MyPosts/Post/Post'
import Profileinfo from './Profileinfo/Profileinfo';




function Profile(props) {


  let postsElem = props.state.posts.map(elem =>
    <Post message={elem.message} key={elem.id} likesCount={elem.likesCount} />
  );

  return (
    <div className={styles.block}>

      <div className={styles.profile_wrap}>
        <Profileinfo />
      </div>

      <NewPost />
      <div className={styles.posts_wrap}>
        {postsElem}
      </div>
    </div>

  );
}

export default Profile;