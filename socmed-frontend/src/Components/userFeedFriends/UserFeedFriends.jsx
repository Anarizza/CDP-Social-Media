import React, { useState, useEffect } from "react";
import "./Feed.css";
import Post from "../post/Post";
import Share from "../share/Share";
import * as postService from "../../Service/post";
import * as userService from "../../Service/users";
import { useParams } from "react-router-dom";
const UserFeed = () => {
  const [posts, setPosts] = useState([]);
  const { fid } = useParams();
  useEffect(() => {
    postService.selectPostByUsersUserId(fid).then((response) => {
      setPosts(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        {/* <Stories /> */}
        {posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
};
export default UserFeed;
