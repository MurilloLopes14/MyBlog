//* Styles
import "./FormPost.css";

//* Hooks & Methods
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import blogFetchData from "../../axios/config";

export const EditPost = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const { id } = useParams();

  const getPost = async () => {
    try {
      const res = await blogFetchData.get(`/posts/${id}`);

      const data = res.data;

      setTitle(data.title);
      setBody(data.body);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  const editPost = async (e) => {
    e.preventDefault();

    const post = { title, body, userId: 1 };

    await blogFetchData.put(`/posts/${id}`, {
      body: post,
    });

    navigate("/");
  };

  return (
    <section id="form_post_container">
      <h2 className="title title-2">Editar post: {title}</h2>
      <form onSubmit={(e) => editPost(e)}>
        <div className="form_control">
          <label htmlFor="title">Título do post:</label>
          <input
            type="text"
            placeholder="Digite o título"
            name="title"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title || ""}
          />
        </div>
        <div className="form_control">
          <label htmlFor="body">Conteúdo do post:</label>
          <textarea
            placeholder="Digite o título"
            name="body"
            id="body"
            onChange={(e) => setBody(e.target.value)}
            value={body || ""}
          ></textarea>
        </div>
        <input type="submit" value={`Confirmar edição`} className="redirect" />
      </form>
    </section>
  );
};
