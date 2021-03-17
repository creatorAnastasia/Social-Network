import React from 'react';
import { addPostAction, ubdateNewPostActionCreator} from '../../../redux/profile-reducer'
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostAction())
  }

  let postChange=(text)=>{
    let action = ubdateNewPostActionCreator(text)
    props.store.dispatch(action)
  }

  return (<MyPosts ubdateNewPostText={postChange} addPost={addPost} posts= {props.posts} 
  posts={state.profilePage.posts} newPostText = {state.profilePage.newPostText} />
  )}
export default MyPostsContainer;