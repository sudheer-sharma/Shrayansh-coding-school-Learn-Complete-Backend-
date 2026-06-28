import React, { useEffect, useState } from "react";
import axios from "axios";

const Feed = () => {
  const [posts, setPosts] = useState([
    {
      _id: "",
      image:
        "https://plus.unsplash.com/premium_photo-1772048933498-d143b4808f18?q=80&w=1046&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "This is a first image",
    },
  ]);

  useEffect(() => {
    axios.get("http://localhost:4000/create_get").then((res) => {
      // console.log(res.data.posts);
      setPosts(res.data.posts);
    });
  }, []);

  return (
    <section className="feed-section">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post} className="post-card">
            <img src={post.image} alt={post.caption} />
            <h3>{post.caption}</h3>
          </div>
        ))
      ) : (
        <h1>No Post Available</h1>
      )}
    </section>
  );
};

export default Feed;
