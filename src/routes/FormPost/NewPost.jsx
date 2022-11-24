//* Styles
import "./FormPost.css";

//* Hooks & Methods
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import blogFetchData from "../../axios/config";

export const NewPost = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const createPost = async (e) => {
    e.preventDefault();

    const post = { title, body, userId: 1 };

    await blogFetchData.post(`/posts`, {
      body: post,
    });

    console.log(post);

    navigate(`/`);
  };

  return (
    <section id="form_post_container">
      <h2 className="title">Inserir novo post:</h2>
      <form onSubmit={(e) => createPost(e)}>
        <div className="form_control">
          <label htmlFor="title">Título do post:</label>
          <input
            type="text"
            placeholder="Digite o título"
            name="title"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form_control">
          <label htmlFor="body">Conteúdo do post:</label>
          <textarea
            placeholder="Digite o título"
            name="body"
            id="body"
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <input type="submit" value={`Criar post`} className="redirect" />
      </form>
    </section>
  );
};
