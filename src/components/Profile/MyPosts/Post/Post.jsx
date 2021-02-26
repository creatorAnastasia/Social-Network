import React from 'react';
import cl from './Post.module.css';

const Post = (props) => {
  return (
    <>
      <div className={cl.item}>
      <img src="https://psyfactor.org/news/i/jesus.jpg.pagespeed.ce.b5GmwCv2Ew.jpg"/>
      {props.message}
      <div>like:{props.like}</div>
      </div>
    </>
  )
}
export default Post;