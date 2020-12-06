import React from 'react';
import styles from './Profile.module.css';
import NewPostContainer from './MyPosts/NewPost/NewPostContainer'
import Post from './MyPosts/Post/Post'
import Profileinfo from './Profileinfo/Profileinfo';


function Profile(props) {

  let postsElem = props.state.posts.map(elem =>
    <Post message={elem.message} key={elem.id} likesCount={elem.likesCount} />
  );

  return (
    <div className={styles.block}>
      <div className={styles.profile_wrap}>
        <Profileinfo profileInfo={props.profileInfo} status={props.status} updateStatus={props.updateStatus} />
      </div>
      <div><NewPostContainer /></div>
      <div className={styles.posts_wrap}>{postsElem}</div>
    </div>

  );
}

export default Profile;