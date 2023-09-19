import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Posts/Post";

let postData = [
  {post : 'Hi, how are you', countLike: 13}, 
  {post : 'it my first post', countLike: 45},
  {post : 'Hi', countLike: 13}, ]



const MyPosts = () => {
  return <div>
    <div className={s.myPost}>
    My posts
    </div>
    <div className={s.add}>
      <div>
      <textarea></textarea>
      </div>
      <div>
      <button>add post</button>
      </div>
    </div>
    <div>
      <div className={s.post}>
      <Post message={postData[0].post} countLike ={postData[0].countLike}/>
      </div>
      <div className={s.post}>
      <Post message={postData[1].post} countLike ={postData[1].countLike}/>

      </div>
    </div>
  </div>

}

export default MyPosts;