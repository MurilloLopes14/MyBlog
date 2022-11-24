//* Styles
import "./Post.css";

//* Hooks & Methods
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import blogFetchData from "../../axios/config";

//* Components
import { Loader } from "../Loader/Loader";

export const Post = () => {
  const [post, setPost] = useState({});

  const { id } = useParams();

  const getPost = async () => {
    try {
      const res = await blogFetchData.get(`/posts/${id}`);

      const data = res.data;

      setPost(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <article className="post">
      <Link to={`/`} className="redirect back-btn">
        Voltar
      </Link>
      {post.title ? (
        <div className="post_container">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ) : (
        <Loader />
      )}
    </article>
  );
};
