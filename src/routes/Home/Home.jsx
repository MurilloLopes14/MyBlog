//* Styles
import "./Home.css";

//* Hooks & Methods
import React, { useState, useEffect } from "react";
import blogFetchData from "../../axios/config";

//* Components
import { Link } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";

export const Home = () => {
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

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <section id="posts_container">
      <h1 className="title">Últimos posts:</h1>

      {posts.length === 0 ? (
        <Loader />
      ) : (
        posts.map((post) => (
          <>
            <article className="post_container" key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <Link to={`/posts/${post.id}`} className="redirect">
                Ler mais
              </Link>
            </article>
          </>
        ))
      )}
    </section>
  );
};
