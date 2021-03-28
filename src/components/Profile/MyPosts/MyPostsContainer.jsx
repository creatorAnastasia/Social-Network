import React from 'react';
import { connect } from 'react-redux';
import { addPostAction, ubdateNewPostActionCreator} from '../../../redux/profile-reducer'
import MyPosts from './MyPosts';

// const MyPostsContainer = (props) => {
//   let state = store.getState();

//   let addPost = () => {
//     store.dispatch(addPostAction())
//   }

//   let postChange=(text)=>{
//     let action = ubdateNewPostActionCreator(text)
//     store.dispatch(action)
//   }

//   return (<MyPosts ubdateNewPostText={postChange}
//                     addPost={addPost}
//                      posts= {state.profilePage.posts} 
//                      newPostText = {state.profilePage.newPostText} />
//   )}

const mapStateToProps = (state) =>
{
  return { 
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    ubdateNewPostText: (text) => {
      let action = ubdateNewPostActionCreator(text)
      dispatch(action)
    },
    addPost: ()=>{
      dispatch(addPostAction())
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;