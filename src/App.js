import React, { useState } from 'react';
import './App.css';

function App() {
  const blogPosts = [
    { id: 1, title: "Welcome to My Blog", content: "This is my first blog post. Stay tuned for more!", fullContent: "This is my first blog post. Stay tuned for more exciting updates and stories about my journey!" },
    { id: 2, title: "React is Awesome", content: "React makes building UIs a breeze. Let's learn it together!", fullContent: "React makes building UIs a breeze. With components, hooks, and state management, it's a powerful tool for developers." },
    { id: 3, title: "Why I Love Coding", content: "Coding allows me to create amazing things from scratch.", fullContent: "Coding allows me to create amazing things from scratch. It's a skill that empowers creativity and problem-solving." },
  ];

  const [expandedPosts, setExpandedPosts] = useState({});

  const toggleReadMore = (id) => {
    setExpandedPosts((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Blog</h1>
        <p className="tagline">Sharing my thoughts and experiences</p>
      </header>
      <main>
        {blogPosts.map((post) => (
          <article key={post.id} className="blog-post">
            <h2>{post.title}</h2>
            <p>{expandedPosts[post.id] ? post.fullContent : post.content}</p>
            <button className="read-more" onClick={() => toggleReadMore(post.id)}>
              {expandedPosts[post.id] ? "Show Less" : "Read More"}
            </button>
          </article>
        ))}
      </main>
      <footer className="App-footer">
        <p>&copy; 2025 My Blog. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
