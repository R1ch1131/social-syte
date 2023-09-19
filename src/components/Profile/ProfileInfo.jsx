import React from "react"
import s from "./ProfileInfo.module.css"


const ProfileInfo =() => {
  return(
    <div>
    <div>
        <img
          className={s.neAva}
          src="https://superwalls.top/uploads/posts/2022-03/1648506443_58-gamerwall-pro-p-fioletovii-geometricheskii-fon-krasivie-62.jpg"
          alt="car"
        />
      </div>
      <div className={s.text}>
        <h2>Ivanov Ivan</h2>
      </div>
      <div>
        <img
          className={s.ava}
          src="https://webmg.ru/wp-content/uploads/2022/06/i-234.jpeg"
          alt=""
        />
      </div>
    </div>
  );

};

export default ProfileInfo;