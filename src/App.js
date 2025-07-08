import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import './App.css';

function App() {
  const blogPosts = [
    {
      id: 1,
      title: "Welcome to My Blog",
      content: "This is my first blog post. Stay tuned for more!",
      fullContent:
       <p>

        "I’m thrilled to have you here on my blog, a space dedicated to sharing ideas, experiences, and insights on topics that inspire me. Whether you stumbled upon this site by chance or you’re a returning reader, I appreciate your presence.
        <br />

        <h1>What You Can Expect </h1> 

        In this blog, I plan to cover a variety of topics including:
        <ul>
          
          <li>Technology: My thoughts on the latest trends in tech, programming tutorials, and reviews of tools I love.</li>

          <li>Personal Growth: Sharing my journey and tips on self-improvement and mindfulness.</li>

          <li>Travel Adventures: Exploring new places and cultures, and offering travel tips and itineraries.</li>

          <li>Lifestyle & Wellbeing: Discussing health, fitness, and holistic living.</li>

          <li>Creative Pursuits: Showcasing my hobbies, such as writing, photography, or any DIY projects.</li>

          <li>Book & Movie Reviews: Sharing thoughts on the latest reads and films.</li>

          <li>Personal Growth: Sharing my journey and tips on self-improvement and mindfulness. </li>

          <li> 
          Travel Adventures: Exploring new places and cultures, and offering travel tips and itineraries.Lifestyle & Wellbeing: Discussing health, fitness, and holistic living.
          </li>

          <li> 
          Creative Pursuits: Showcasing my hobbies, such as writing, photography, or any DIY projects.
          </li>

          <li> 
          Book & Movie Reviews: Sharing thoughts on the latest reads and films.
          </li>
         
        </ul>
        Join the ConversationI encourage you to engage with me! Feel free to leave comments, share your thoughts, or suggest topics you’d like me to explore. Let’s create a vibrant community where we can learn from each other.
        <br/>
        Thank you for visiting, and I hope you enjoy the journey ahead!
        <br/>
        Happy reading!!"

        </p>, 
      image: "https://via.placeholder.com/600x300?text=Welcome+to+My+Blog",
    },
    {
      id: 2,
      title: "React is Awesome",
      content: "React makes building UIs a breeze. Let's learn it together!",
      fullContent: "React makes building UIs a breeze. With components, hooks, and state management, it's a powerful tool for developers.",
      image: "https://via.placeholder.com/600x300?text=React+is+Awesome",
      tags: ["React", "Frontend"]
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
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

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

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_opk9h66', // Replace with your EmailJS service ID
        'template_nhgte5q', // Replace with your EmailJS template ID
        e.target,
        'p9t7cTFJM_TjwOZ8i' // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
        },
        (error) => {
          alert('Failed to send message. Please try again.');
        }
      );

    e.target.reset(); // Reset the form after submission
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

  useEffect(() => {
    const elements = document.querySelectorAll('.blog-post');
    elements.forEach((el) => {
      el.classList.add('visible'); // Ensure all posts are visible on load
    });
  }, []);

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <header className="App-header">
        <h1>My Blog</h1>
        <p className="tagline">Sharing my thoughts and experiences</p>
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
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
            <article key={post.id} className="blog-post visible">
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
          <form onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="Your Name" required />
            <input type="email" name="user_email" placeholder="Your Email" required />
            <input type="subject" name="user_subject" placeholder="Your Subject here" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit">Send</button>
          </form>
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
        <div className="social-links">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
