import classes from "./styles/App.module.css";
import ReturnPost from "./components/ReturnPost";

import React, { useMemo, useState } from "react";
import PostForm from "./components/PostForm";
import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";
import MyModal from "./UI/MyModal/MyModal";
import MyButton from "./UI/button/MyButton";
import axios from "axios";
import MyModalEx from "./UI/MyModal2/MyModalEx";

function App() {
  /*   const [posts, setPosts] = useState([
    { id: 1, title: "Java", body: "description1" },
    { id: 2, title: "C", body: "description2" },
    { id: 3, title: "Python", body: "description3" },
  ]); */

  const [posts, setPosts] = useState([]);

  async function fetchPosts() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    debugger;
    console.log(response);
    setPosts(response.data);
    //console.log(posts);
  }

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  //const bodyInputRef = useRef();

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const optionsMassive = [
    { name: "Сортировка по названию", value: "title" },
    { name: "Сортировка по значению", value: "body" },
  ];

  const [selectedSort, setSelectedSort] = useState(""); //записываем title or body
  const [searchQuery, setSearchQuery] = useState("");

  const sortedPosts = useMemo(() => {
    console.log("после useMemo");
    if (selectedSort) {
      console.log("после title или body");
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    } else {
      return posts;
    }
  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, sortedPosts]);

  const sortPosts = (titleOrBody) => {
    setSelectedSort(titleOrBody);

    //setPosts(); // разворачиваем посты, потому что напрямую состояние менять нельзя. меняем копию массива
  };

  const [modal, setModal] = useState(false);

  return (
    <div className={classes.App}>
      <h1>Список постов</h1>
      <button onClick={fetchPosts}>сделать запрос</button>
      <MyButton style={{ marginTop: "30px" }} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>

      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{ margin: "15px 0" }} />

      <div>
        <MyInput
          placeholder="поиск"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        <br />
        <MySelect
          value={selectedSort}
          defaultValue="Сортировка по..."
          onChange={sortPosts}
          options={optionsMassive}
        />
      </div>

      {posts.length !== 0 ? ( // подобный функционал называется условная отрисовка
        <div>
          {sortedAndSearchedPosts.map(
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
      <button onClick={() => setModal(true)}>press</button>
      <MyModalEx visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModalEx>
    </div>
  );
}

export default App;
