import React from 'react';
import cl from './ProfileInfo.module.css'


const ProfileInfo = () => {
  return (
    <div>
      <div className={cl.imgcontent}>
        <img src="https://a-static.besthdwallpaper.com/zvezda-nebo-i-kosmos-oboi-1920x600-20056_57.jpg"></img>
      </div>
      <div className={cl.discr}>ava+discription</div>
    </div>
  )
}
export default ProfileInfo;