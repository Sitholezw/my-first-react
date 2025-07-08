import React from 'react';
import './TagFilter.css';

const TagFilter = ({ tags, selectedTag, onSelectTag }) => (
  <div className="tag-filter">
    {tags.map(tag => (
      <button
        key={tag}
        className={selectedTag === tag ? "active" : ""}
        onClick={() => onSelectTag(tag)}
      >
        {tag}
      </button>
    ))}
  </div>
);

export default TagFilter;
// This component renders a list of tags as buttons. When a tag is clicked, it calls the onSelectTag function with the selected tag.