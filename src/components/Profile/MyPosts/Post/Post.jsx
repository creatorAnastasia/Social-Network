import React from 'react';
import cl from './Post.module.css';
import userPhoto from '../../../../assets/images/User.png' 


const Post = (props) => {
  return (
    <div className={cl.item}>
      <div className={cl.itemImg}>
        <img src={userPhoto} /></div>
        <div className={cl.postMessage}> 
      {props.message}
      </div>
      <div className={cl.like}></div>
      <div>{props.like}</div>
      
      </div>
    
  )
}
export default Post;