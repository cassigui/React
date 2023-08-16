import { PostCard } from "../PostCard";
import "./styles.css";
import React from 'react';
import P from "prop-types";

export const Posts = ({ posts = [] }) => (
  <div className='posts'>
    {posts.map((post) => (
      <PostCard key={post.id} id={post.id} title={post.title} body={post.body} cover={post.cover} />
    ))}
  </div>
)

Posts.defaultProps = {
  posts: [],
}

Posts.propTypes = {
  posts: P.array,
}

