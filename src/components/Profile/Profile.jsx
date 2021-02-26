import React from 'react';
import cl from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
// модуль он же css объект


const Profile = () => {
  return (
  <>
    <ProfileInfo />
    <MyPosts />
  </>
  )
}
 export default Profile;