import React, { useState, useEffect } from "react";
import "./Feed.css";
import Post from "../post/Post";
import Share from "../share/Share";
import * as postService from "../../Service/post";
import * as userService from "../../Service/users";
import UserPost from "../../Components/userPost/UserPost";
import { useParams } from "react-router-dom";

const UserFeed = () => {
  const params = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postService.selectPostByUsersUserId(params.id).then((response) => {
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
          <UserPost key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
};
export default UserFeed;
