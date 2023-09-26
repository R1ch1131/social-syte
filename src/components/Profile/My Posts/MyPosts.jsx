import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Posts/Post";


const MyPosts = (props) => {
  
let postElement = props.posts.map(post => <Post message={post.post} countLike ={post.countLike}/>)

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
      {postElement}
      </div>
    </div>
  </div>

}

export default MyPosts;