import React from "react";
import s from "./Post.module.css"

const Post = (props) => {



  return <div className={s.item}>
    <img src="https://webmg.ru/wp-content/uploads/2022/06/i-234.jpeg" alt="logo" />
  {props.message}
  <div>
  <span>like</span> {props.countLike}
  </div>
</div>
}

export default Post;