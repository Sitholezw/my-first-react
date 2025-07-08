import React from 'react';
import './Modal.css';

const Modal = ({ post, onClose }) => (
  <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="close-modal" onClick={onClose}>
        &times;
      </button>
      <img src={post.image} alt={post.title} className="modal-image" />
      <h2 className="modal-title">{post.title}</h2>
      <p>{post.fullContent}</p>
    </div>
  </div>
);

export default Modal;
