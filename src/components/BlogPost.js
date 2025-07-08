import React from 'react';
import Button from '@mui/material/Button';
import './BlogPost.css';
import BlogPost from './BlogPost';

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

const BlogList = ({ posts, onReadMore }) => (
  <section id="blog" className="blog-grid">
    {posts.map((post) => (
      <BlogPost key={post.id} post={post} onReadMore={onReadMore} />
    ))}
  </section>
);

export default BlogPost;
