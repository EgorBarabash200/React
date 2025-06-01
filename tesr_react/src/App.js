import React, { useRef, useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
function App() {
  const [post, setPost] = useState([
    { id: 1, title: 'AJavaScript 1', body: 'TDescription' },
    { id: 2, title: 'MJavaScript 2', body: 'ADescription' },
    { id: 3, title: 'DJavaScript 3', body: 'ZDescription' }
  ]);
  const [selectedSort, setSelectedSort] = useState('')
  const createPost = (newPost) => {
    setPost([...post, newPost]);
  }
  const removePost = (posts) => {
    setPost(post.filter(element => element.id !== posts.id))
  }
  const sortPost = (sort) =>{
    setSelectedSort(sort)
    setPost([...post].sort((a, b) => a[sort].localeCompare(b[sort])))
  }
  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }}></hr>
      <MySelect
        value={selectedSort}
        onChange={sortPost}
        defultValue='Сортировка'
        options={[
          { value: 'title', name: 'По названию' },
          { value: 'body', name: 'По описанию' }
        ]}
      />
      {post.length !== 0
        ? <PostList remove={removePost} post={post} title='Список постов JavaScript' />
        : <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>
      }
    </div>
  );
}

export default App;

