import React from 'react';

const Home = ({ posts, deletePost }) => {
  const handleDelete = (postId) => {
    // Call deletePost function from parent component (App.jsx) to delete the post
    deletePost(postId);
  };

  return (
    <div>
      <h2>Home</h2>
      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        <div>
          <h3>Posts:</h3>
          {posts.map((post) => (
            <div key={post.id}>
              <h4>{post.title}</h4>
              <p>{post.content}</p>
              <button onClick={() => handleDelete(post.id)}>Delete</button>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
