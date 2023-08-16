import "./style.css";
import P from "prop-types";
import React from 'react';

export const PostCard = ({ cover, id, title, body }) => (
  <div className="post">
    <img src={cover} alt={title}></img>
    <div className="post-content">
      <h1>{title}{id}</h1>
      <p>{body}</p>
    </div>
  </div>
);

PostCard.propTypes = {
  cover: P.string.isRequired,
  id: P.number.isRequired,
  title: P.string.isRequired,
  body: P.string.isRequired
}
