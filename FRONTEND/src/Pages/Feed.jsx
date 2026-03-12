import React, { useState,useEffect, use } from "react";
import axios from "axios";

const Feed = () => {
  const [ posts, setPosts] = useState([
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VucmV5JTIwaW1hZ2VzfGVufDB8fDB8fHww&w=1000&q=80",   
      caption: "beautiful senery"
      
    }
  ])

  useEffect(() => {
    axios.get("http://localhost:3000/posts")
      .then((res) => {  
        setPosts(res.data.posts);
      });
  }, [])

  return (
    <section className="feed-section">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} className="post-card">
            <img src={post.image} alt={post.caption} />
            <p>{post.caption}</p>
          </div>
        ))
      ) : (
        <p>No posts available</p>
      )}
    </section>
  );
};

export default Feed;
