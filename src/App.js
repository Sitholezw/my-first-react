import React, { useState, useEffect } from 'react';
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
    {
      id: 5,
      title: "CSS Tricks for Beginners",
      content: "Learn some cool CSS tricks to enhance your web designs.",
      fullContent: "CSS is a powerful tool for styling websites. Learn tricks like animations, gradients, and responsive design to make your websites stand out.",
      image: "https://via.placeholder.com/600x300?text=CSS+Tricks+for+Beginners",
    },
    {
      id: 6,
      title: "Understanding APIs",
      content: "APIs are the backbone of modern applications. Learn how they work.",
      fullContent: "APIs allow applications to communicate with each other. Learn how to use RESTful APIs to fetch and send data in your projects.",
      image: "https://via.placeholder.com/600x300?text=Understanding+APIs",
    },
    {
      id: 7,
      title: "Mastering Git",
      content: "Version control is essential for developers. Master Git today!",
      fullContent: "Git is a version control system that helps developers collaborate and manage code changes. Learn commands like commit, push, pull, and branching.",
      image: "https://via.placeholder.com/600x300?text=Mastering+Git",
    },
    {
      id: 8,
      title: "Web Accessibility Basics",
      content: "Make your websites accessible to everyone.",
      fullContent: "Web accessibility ensures that your websites can be used by people with disabilities. Learn about ARIA roles, semantic HTML, and keyboard navigation.",
      image: "https://via.placeholder.com/600x300?text=Web+Accessibility+Basics",
    },
  ];

  const [modalData, setModalData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const openModal = (post) => {
    setModalData(post);
  };

  const closeModal = () => {
    setModalData(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.blog-post');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on page load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search blog posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <section id="blog" className="blog-grid">
          {filteredPosts.slice(indexOfFirstPost, indexOfLastPost).map((post) => (
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
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
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
