import React from 'react';
import cl from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer';



const Profile = (props) => {
  return (
  <>
    <ProfileInfo />
      <MyPostsContainer store={props.store} />
  </>
  )
}
 export default Profile;