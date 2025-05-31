import React, {useState} from 'react'
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
const PostForm = ({create}) => {
     const [posts, setPosts] = useState({title: '', body: ''});
      /*const bodyInputRef = useRef(); */
      const addNewPost = (e) => {
        e.preventDefault() 
        const newPost = {
            ...posts, id: Date.now()
        }
        create(newPost);
        setPosts({title: '', body: ''});
        /*console.log(bodyInputRef.current.value);*/
      }
  return (
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
  )
}

export default PostForm

