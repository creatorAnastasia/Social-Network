import React from 'react';
import cl from './Post.module.css';

const Post = (props) => {
  return (
    <div className={cl.item}>
      <div className={cl.itemImg}>
        <img src="https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2015/12/24/151224130920_jesus_1_624x485_thinkstock_nocredit.jpg" /></div>
        <div className={cl.postMessage}> 
      {props.message}
      </div>
      <div>like:{props.like}</div>
      </div>
    
  )
}
export default Post;