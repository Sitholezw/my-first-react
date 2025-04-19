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
    {
      id: 4,
      title: "Exploring JavaScript",
      content: "JavaScript is the backbone of modern web development.",
      fullContent: "JavaScript is the backbone of modern web development. It powers interactivity and dynamic content on websites.",
      image: "https://via.placeholder.com/600x300?text=Exploring+JavaScript",
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
      <nav className="App-nav">
        <a href="#blog">Blog</a>
        <a href="#about">About Me</a>
        <a href="#contact">Contact</a>
      </nav>
      <main>
        <section id="blog" className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-post">
              <img src={post.image} alt={post.title} className="blog-image" />
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <button className="read-more" onClick={() => openModal(post)}>
                Read More
              </button>
            </article>
          ))}
        </section>
        <section id="about" className="about-section">
          <h2>About Me</h2>
          <p>
            Hi, I'm a passionate developer who loves to share knowledge and build amazing things. This blog is my space to share my journey, thoughts, and experiences.
          </p>
        </section>
        <section id="contact" className="contact-section">
          <h2>Contact Me</h2>
          <p>Feel free to reach out to me via email or follow me on social media:</p>
          <ul>
            <li>Email: myemail@example.com</li>
            <li>Twitter: <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">@mytwitter</a></li>
            <li>LinkedIn: <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">My LinkedIn</a></li>
          </ul>
        </section>
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
