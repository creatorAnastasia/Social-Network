import React from 'react';
import cl from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
// модуль он же css объект


const Profile = (props) => {
  return (
  <>
    <ProfileInfo />
      <MyPosts 
      posts={props.profilePage.posts} 
      addPost={props.addPost} 
      newPostText={props.profilePage.newPostText}
      updateNewPostText={props.updateNewPostText}/>
  </>
  )
}
 export default Profile;