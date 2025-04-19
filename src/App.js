import React, { useState } from 'react';
import './App.css';

function App() {
  const blogPosts = [
    {
      id: 1,
      title: "Welcome to My Blog",
      content: "This is my first blog post. Stay tuned for more!",
      fullContent: "This is my first blog post. Stay tuned for more exciting updates and stories about my journey!",
      image: "https://via.placeholder.com/600x300?text=Welcome+to+My+Blog",
    },
    {
      id: 2,
      title: "React is Awesome",
      content: "React makes building UIs a breeze. Let's learn it together!",
      fullContent: "React makes building UIs a breeze. With components, hooks, and state management, it's a powerful tool for developers.",
      image: "https://via.placeholder.com/600x300?text=React+is+Awesome",
    },
    {
      id: 3,
      title: "Why I Love Coding",
      content: "Coding allows me to create amazing things from scratch.",
      fullContent: "Coding allows me to create amazing things from scratch. It's a skill that empowers creativity and problem-solving.",
      image: "https://via.placeholder.com/600x300?text=Why+I+Love+Coding",
    },
  ];

  const [modalData, setModalData] = useState(null);

  const openModal = (post) => {
    setModalData(post);
  };

  const closeModal = () => {
    setModalData(null);
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
            <p>{post.content}</p>
            <button className="read-more" onClick={() => openModal(post)}>
              Read More
            </button>
          </article>
        ))}
      </main>
      {modalData && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>
              &times;
            </button>
            <img src={modalData.image} alt={modalData.title} className="modal-image" />
            <h2 className="modal-title">{modalData.title}</h2>
            <p>{modalData.fullContent}</p>
          </div>
        </div>
      )}
      <footer className="App-footer">
        <p>&copy; 2025 My Blog. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
