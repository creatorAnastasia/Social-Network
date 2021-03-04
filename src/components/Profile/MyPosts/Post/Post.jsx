import React from 'react';
import cl from './Post.module.css';

const Post = (props) => {
  return (
    <div className={cl.item}>
      <div className={cl.itemImg}>
        <img src="https://psyfactor.org/news/i/jesus.jpg.pagespeed.ce.b5GmwCv2Ew.jpg" /></div>
        <div className={cl.postMessage}> 
      {props.message}
      </div>
      <div>like:{props.like}</div>
      </div>
    
  )
}
export default Post;