import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Post from "../post/Post";
import * as postService from "../../Service/post";

const EditPost = ({ post }) => {
  const params = useParams();

  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    postService.selectPostByUsersUserId(params.userId).then((response) => {
      setUser(response.data);
      setLoading(false);
    });
  }, [params.id]);

  const handleEditPost = (postId) => {
    postService
      .updatePost(user.id, postId)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        if (error.response && error.response.status == 400) {
          alert(error.response.data.message[0]);
        }
      });
  };
  if (user)
    return (
      <div>
        <Post
          initialValue={{
            posttext: post.posttext,
            image: post.image,
          }}
        />
      </div>
    );
};

export default EditPost;
