import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewPost = ({ addPost }) => {
  const [formData, setFormData] = useState({ title: '', content: '' });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      id: Date.now(),
      title: formData.title,
      content: formData.content,
    };

    // Update posts state in parent component (App.jsx)
    addPost(newPost);

    // Reset form data
    setFormData({ title: '', content: '' });

    // Navigate to home page after creating new post
    navigate('/');
  };

  return (
    <div>
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            required
            rows="4"
          />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default NewPost;
