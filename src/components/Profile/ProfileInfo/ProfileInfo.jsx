import React from 'react';
import Select from '../../../common/components/selector/select';
import cl from './ProfileInfo.module.css'
import userPhoto from '../../../assets/images/User.png'

const ProfileInfo = () => {
  return (
    <div>
      <div className={cl.imgcontent}>
        {/* <img src='http://wp.widewallpapers.ru/2k/abstract-color-lines/1280x800/color-lines-abstract-wide-wallpaper-1280x800-001.jpg'></img> */}
      </div>
      <div></div>
      <div><img alt="avatar" className={cl.avaImg} src={userPhoto} /></div>
      <Select />
      <div  className={cl.discr}>discription</div>
    </div>
  )
}
export default ProfileInfo;