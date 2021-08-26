import React from 'react';
import cl from './MyPosts.module.css';
import Post from './Post/Post'
// import { addPostAction} from '../../../redux/profile-reducer'
import Button from '../../../common/components/Button/button';
import Toggle from '../../../common/components/toggle/toggle';


const MyPosts = (props) => {
  let postsElement = 
  props.posts.map (p => <Post message={p.message} like={p.like} />)

  let newPostEl = React.createRef();
  let onaddPost = () => {
    props.addPost();
  }
  let postChange=()=>{
    let text = newPostEl.current.value;
    props.ubdateNewPostText(text)
    // let action = ubdateNewPostAction(text);
    // props.dispatch(action)
  }
let toggle=()=>{
  console.log("Toggled");
}
  return (
  <div className={cl.myPosts}> MY POSTS
    <div className={cl.newPost}>
        <textarea ref={newPostEl}
          onChange={postChange}
          value={props.newPostText}
        />
      <div>
        <Button onClick={onaddPost} label="Add Post" /> 
      </div>
      <div className={cl.toggle}>
      <Toggle onClick = {toggle} />
      </div>
       </div>
      {postsElement}
   </div>
  )}
export default MyPosts;