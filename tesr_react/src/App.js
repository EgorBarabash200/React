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
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  /*const bodyInputRef = useRef(); */
  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      id: Date.now(),
      title,
      body
    }
    setPost( [...post, newPost]);
    setTitle('');
    setBody('');
    /*console.log(bodyInputRef.current.value);*/
  }
  return (
    <div className="App">
      <form>
        <MyInput
          value={title}                             /* Управляемый компонент*/
          onChange={e => setTitle(e.target.value)}
          type="text"
          placeholder="Название поста"
        />
        {/* <MyInput
        ref = {bodyInputRef}
         type="text"                 Неуправляемый компонент
         placeholder="Описание поста"
         /> */}
        <MyInput
          value={body}                             /* Управляемый компонент*/
          onChange={e => setBody(e.target.value)}
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

