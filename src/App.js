import classes from "./styles/App.module.css";
import ReturnPost from "./components/ReturnPost";

import React, { useRef, useState } from "react";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Java", body: "description1" },
    { id: 2, title: "Java2", body: "description2" },
    { id: 3, title: "Java3", body: "description3" },
  ]);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  //const bodyInputRef = useRef();

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const removePost1 = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className={classes.App}>
      <div>
        <h1>Список постов</h1>
        {/*    <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Заголовок поста"/>
        <input value={body} onChange={(e) => setBody(e.target.value)} placeholder="Тело поста"/> */}
        <PostForm create={createPost} />
      </div>

      {posts.length !== 0 ? (
        <div>
          {posts.map(
            (
              elementMassiva,
              index /* видимо у мапы есть свойство индекс */
            ) => (
              <ReturnPost
                number={
                  index + 1
                } /* получить индекс элемента массива, здесь мы рендерим весь массив через мап*/
                remove={removePost}
                post={elementMassiva}
                key={elementMassiva.id}
              />
            )
          )}
        </div>
      ) : (
        <h1 style={{ textAlign: "center" }}>Посты кончились</h1>
      )}
    </div>
  );
}

export default App;
