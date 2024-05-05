import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import NewPost from './components/NewPost';

const App = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const deletePost = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };

  return (
    <Router>
      <div>
        <NavBar />
        <div>
          <h1>Blog Management App</h1>
          <Routes>
            <Route
              path="/"
              element={<Home posts={posts} deletePost={deletePost} />}
            />
            <Route path="/new" element={<NewPost addPost={addPost} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
