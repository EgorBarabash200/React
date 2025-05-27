import React, { useRef, useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
function App() {
  const [post, setPost] = useState([
    { id: 1, title: 'JavaScript 1', body: 'Description' },
    { id: 2, title: 'JavaScript 2', body: 'Description' },
    { id: 3, title: 'JavaScript 3', body: 'Description' }
  ]);
  const [posts, setPosts] = useState({title: '', body: ''});
  /*const bodyInputRef = useRef(); */
  const addNewPost = (e) => {
    e.preventDefault() 
    setPost( [...post, {...posts, id: Date.now()}]);
    setPosts({title: '', body: ''});
    /*console.log(bodyInputRef.current.value);*/
  }
  return (
    <div className="App">
      <form>
        <MyInput
          value={posts.title}                             /* Управляемый компонент*/
          onChange={e => setPosts({...posts, title: e.target.value})}
          type="text"
          placeholder="Название поста"
        />
        {/* <MyInput
        ref = {bodyInputRef}
         type="text"                 Неуправляемый компонент
         placeholder="Описание поста"
         /> */}
        <MyInput
          value={posts.body}                             /* Управляемый компонент*/
          onChange={e => setPosts({...posts, body: e.target.value})}
          type="text"
          placeholder="Описание поста"
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList post={post} title='Список постов JavaScript' />
    </div>
  );
}

export default App;

