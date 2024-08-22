import './App.css';
import React from 'react';

const blogPosts = [
  {id: 0, title: "Introduction to SSR", content:"Server-Side rendering is..."},
  {id: 1, title: "Benefits of SSR", content:"SSR Provides better inital load times..."}
]

function App() {
  return (
    <>
     <h1>SSR Blogs</h1>
     {blogPosts.map((posts)=>(
      <div key={posts.id}>
        <h2>{posts.title}</h2>
        <p>{posts.content}</p>
      </div>
     ))}
    </>
  );
}

export default App;
