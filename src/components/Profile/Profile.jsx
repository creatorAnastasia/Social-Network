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
        dispatch={props.dispatch}
      newPostText={props.profilePage.newPostText} />
  </>
  )
}
 export default Profile;