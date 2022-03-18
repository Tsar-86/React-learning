import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://64.media.tumblr.com/5c0fd48b39d9fcfc231cf6375ab1aa84/tumblr_pq2d3n6y4a1wpuh1vo4_250.png' alt="mr_bin" />
        { props.message }
          <div>
        <span>like</span> { props.likesCount }
      </div>
    </div>
  )
}

export default Post;