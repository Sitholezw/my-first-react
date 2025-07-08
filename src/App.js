import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import BlogList from './components/BlogList';
import Modal from './components/Modal';
import Pagination from './components/Pagination';
import TagFilter from './components/TagFilter';
import ContactForm from './components/ContactForm';
import NewsletterForm from './components/NewsletterForm';
import { blogPosts } from './data';
import './styles/App.css';

function App() {
  const [modalData, setModalData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [selectedTag, setSelectedTag] = useState("All");
  const [loading, setLoading] = useState(true);

  const postsPerPage = 4;

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) setDarkMode(savedMode === 'true');
  }, []);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const allTags = ["All", ...new Set(blogPosts.flatMap(post => post.tags || []))];

  const filteredPosts = blogPosts.filter(
    (post) =>
      (selectedTag === "All" || (post.tags && post.tags.includes(selectedTag))) &&
      (post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
       post.content.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <Helmet>
        <title>My Blog - Home</title>
        <meta name="description" content="A blog about web development, coding, and more." />
      </Helmet>

      <header className="App-header">
        <h1>My Blog</h1>
        <p className="tagline">Sharing my thoughts and experiences</p>
        <label className="switch">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
          />
          <span className="slider"></span>
        </label>
      </header>

      <nav className="App-nav">
        <a href="#blog">Blog</a>
        <a href="#about">About Me</a>
        <a href="#contact">Contact</a>
      </nav>

      <header className="hero">
        <h1>Welcome to My Blog</h1>
        <p>Insights, tutorials, and stories from a passionate developer.</p>
      </header>

      <main>
        {loading ? (
          <div className="spinner"></div>
        ) : (
          <>
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search blog posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <TagFilter tags={allTags} selectedTag={selectedTag} onSelectTag={setSelectedTag} />
            <BlogList posts={currentPosts} onReadMore={setModalData} />
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />

            <section id="about" className="about-section">
              <h2>About Me</h2>
              <p>Hi, I'm a passionate developer who loves to share knowledge and build amazing things. This blog is my space to share my journey, thoughts, and experiences.</p>
            </section>

            <section id="contact" className="contact-section">
              <h2>Contact Me</h2>
              <ContactForm />
            </section>

            <section className="newsletter-section">
              <h2>Subscribe to our Newsletter</h2>
              <NewsletterForm />
            </section>
          </>
        )}
      </main>

      {modalData && <Modal post={modalData} onClose={() => setModalData(null)} />}

      <footer className="App-footer">
        <p>&copy; 2025 My Blog. All rights reserved.</p>
        <div className="social-links">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
// This is the main App component that renders the blog, modal, pagination, tag filter, contact form, and newsletter subscription.