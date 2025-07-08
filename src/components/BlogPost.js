import React from 'react';
import Button from '@mui/material/Button';
import './BlogPost.css';

const BlogPost = ({ post, onReadMore }) => (
  <article className="blog-post visible">
    <img src={post.image} alt={`Post titled ${post.title}`} className="blog-image" />
    <h2>{post.title}</h2>
    <p>{post.content}</p>
    <Button variant="contained" color="primary" onClick={() => onReadMore(post)}>
      Read More
    </Button>
  </article>
);

export default BlogPost;
