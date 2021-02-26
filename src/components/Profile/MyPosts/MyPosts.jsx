import React from 'react';
import cl from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {
  let posts = [
    { id: 1, message: 'hi',like:5 },
    { id: 2, message: 'hi,Nastya, it\s my first post' , like:7},
  ]
  let postsElement = posts.map(p => <Post message={p.message} like={p.like} />)
  return (
  <div className={cl.myPosts}> MY POSTS
    <div className={cl.newPost}>
      <textarea placeholder="New Post"></textarea>
      <div>
        <button>addText</button>
      </div>
       </div>
      {postsElement}
   </div>
  )}
export default MyPosts;