import React, { useState, useEffect } from "react";
import "./Feed.css";
import Post from "../post/Post";
import Share from "../share/Share";
import Stories from "../stories/Stories";
import * as postService from "../../Service/post";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postService.getPosts().then((response) => {
      setPosts(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        {/* <Stories /> */}
        <Share />

        {[...posts].reverse().map((p) => (
          <Post  post={p} />
        ))}
      
      </div>
    </div>
  );
};
export default Feed;
