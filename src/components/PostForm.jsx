import React from "react";

import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";
import { useState } from "react";

const PostForm = (props) => {

    const [post, setPost] = useState({title:'', body:''});

    let addnewPost = (e) => {
        e.preventDefault(); 
        let newPost = {...post, id:Date.now()}
        props.create(newPost);
        setPost({title:'', body:''});
      };

   

    return(
        <form>
        <MyInput value={post.title} onChange={(e) => setPost({...post, title: e.target.value})} />
        <MyInput value={post.body} onChange={(e) => setPost({...post, body: e.target.value})} />
        {/* <MyInput ref={bodyInputRef} onChange={(e) => setBody(e.target.value)} /> */}

{/*          <button
          style={{ backgroundColor: "black", color: "white" }}
          onClick={deletePost}
        >
          Удалить пост 
        </button> */}

        <MyButton onClick={addnewPost}>Добавить новый пост</MyButton>
        </form>
    )
}


export default PostForm;