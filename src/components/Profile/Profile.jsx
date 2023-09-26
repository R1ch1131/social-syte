import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./My Posts/MyPosts";
import ProfileInfo from "./ProfileInfo";

const Profile = (props) => {

  return (
    <div className={s.profile}>
      <ProfileInfo />
      <MyPosts posts = {props.posts}/>
    </div>
  );
};

export default Profile;
