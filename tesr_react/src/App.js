import React, { useRef, useState, useMemo, useEffect } from "react";
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
import MyModal from "./components/UI/MyModal/MyModal";
import { usePosts } from "./hooks/usePost";
import axios from "axios";
import PostService from "./API/PostService";
import Loader from "./components/UI/loader/Loader";
import { useFetching } from "./hooks/useFetching";
function App() {
  const [post, setPost] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(post, filter.sort, filter.query);
  const[fetchPost, isPostsLoading, postError] = useFetching(async ()=>{
    const post = await PostService.getAll();
    setPost(post);
  })
  useEffect(() => {
    fetchPost();
  }, []);
  const createPost = (newPost) => {
    setPost([...post, newPost]);
    setModal(false);
  }
  
  const removePost = (posts) => {
    setPost(post.filter(element => element.id !== posts.id))
  }
  return (
    <div className="App">
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '15px 0' }}></hr>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {postError &&
      <h1>Произошла ошибка ${postError}</h1> 
      }
      {isPostsLoading
        ? <div style={{display: "flex", justifyContent: 'center',  marginTop:'50px'}}><Loader/></div>
        : <PostList remove={removePost} post={sortedAndSearchedPosts} title='Список постов JavaScript' />
      }
    </div>
  );
}

export default App;

