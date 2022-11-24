//* Styles
import "./Admin.css";

//* Hooks & Methods
import blogFetchData from "../../axios/config";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//* Components
import { Loader } from "../../components/Loader/Loader";

export const Admin = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const res = await blogFetchData.get(`/posts`);

      const data = res.data;

      setPosts(data);
    } catch (err) {
      console.log(err);
    }
  };

  const deletePost = async (id) => {
    await blogFetchData.delete(`/posts/${id}`);

    const filteredPosts = posts.filter((post) => post.id !== id);

    setPosts(filteredPosts);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <section id="admin">
      <h1 className="title">Gerenciar posts</h1>
      {posts.length === 0 ? (
        <Loader />
      ) : (
        posts.map((post) => (
          <article key={post.id} className="post_container">
            <h2>{post.title}</h2>
            <div className="actions">
              <Link to={`/posts/edit/${post.id}`} className="redirect edit">
                Editar
              </Link>
              <button
                className="redirect delete"
                onClick={() => deletePost(post.id)}
              >
                Excluir
              </button>
            </div>
          </article>
        ))
      )}
    </section>
  );
};
