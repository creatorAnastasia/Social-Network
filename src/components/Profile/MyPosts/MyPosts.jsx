import React from 'react';
import cl from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = (props) => {

let newPostEl = React.createRef();

  let addPost = () => {
     props.addPost()
    //  props.updateNewPostText('');
  }
  let postsElement = props.posts.map (p => <Post message={p.message} like={p.like} />)

  let postChange=()=>{
    let text = newPostEl.current.value
    props.updateNewPostText(text);
  }

  return (
  <div className={cl.myPosts}> MY POSTS
    <div className={cl.newPost}>
        <textarea ref={newPostEl}
                 onChange={postChange}
                  value={props.newPostText}/>
      <div>
        <button onClick={addPost}>addText</button>
      </div>
       </div>
      {postsElement}
   </div>
  )}
export default MyPosts;