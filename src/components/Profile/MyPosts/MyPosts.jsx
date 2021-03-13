import React from 'react';
import cl from './MyPosts.module.css';
import Post from './Post/Post'
import { addPostAction, ubdateNewPostAction} from '../../../redux/profile-reducer'

const MyPosts = (props) => {
 
  let newPostEl = React.createRef();

  let addPost = () => {
    props.dispatch(addPostAction())
  }

  let postsElement = props.posts.map (p => <Post message={p.message} like={p.like} />)

  let postChange=()=>{
    let text = newPostEl.current.value;
    let action = ubdateNewPostAction(text);
    props.dispatch(action)
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