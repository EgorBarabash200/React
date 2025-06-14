import React, { useRef, useState, useMemo } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";
function App() {
  const [post, setPost] = useState([
    { id: 1, title: 'AJavaScript 1', body: 'TDescription' },
    { id: 2, title: 'MJavaScript 2', body: 'ADescription' },
    { id: 3, title: 'DJavaScript 3', body: 'ZDescription' }
  ]);
  const [filter, setFilter] = useState({ sort: '', query: '' })

  const sortedPost = useMemo(() => {
    console.log('Функция отработала')
    if (filter.sort) {
      return [...post].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    } else {
      return post;
    }
  }, [filter.sort, post]);
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPost.filter(item => item.title.toLowerCase().includes(filter.query));
  }, [filter.query, sortedPost])
  const createPost = (newPost) => {
    setPost([...post, newPost]);
  }
  const removePost = (posts) => {
    setPost(post.filter(element => element.id !== posts.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }}></hr>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <PostList remove={removePost} post={sortedAndSearchedPosts} title='Список постов JavaScript' />
    </div>
  );
}

export default App;

