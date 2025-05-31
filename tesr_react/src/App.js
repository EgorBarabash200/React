import React, { useRef, useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
function App() {
  const [post, setPost] = useState([
    { id: 1, title: 'JavaScript 1', body: 'Description' },
    { id: 2, title: 'JavaScript 2', body: 'Description' },
    { id: 3, title: 'JavaScript 3', body: 'Description' }
  ]);
  const createPost = (newPost) =>{
     setPost([...post, newPost]);
  }
  const removePost = (posts) =>{
    setPost(post.filter(element => element.id !== posts.id))
  }
  return (
    <div className="App">
      <PostForm create = {createPost}/>
      {post.length !== 0
        ? <PostList remove = {removePost} post={post} title='Список постов JavaScript' />
        : <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
      }
    </div>
  );
}

export default App;

