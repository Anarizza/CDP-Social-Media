import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Post from "../post/Post";
import * as postService from "../../Service/post";
import PostForm from "../form/PostForm";
import * as userService from "../../Service/users";
import PostFormConnector from "../form/PostFormConnector";

const EditPost = () => {
  const params = useParams();

  const navigate = useNavigate();
  const [user, setUsers] = useState([]);
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    userService.getUsersById(1).then((response) => {
      setUsers(response.data);
      console.log(response.data);
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    postService.fetchPostById(params.id).then((response) => {
      setPosts(response.data);
      setLoading(false);
    });
  }, [params.id]);


  const handleSubmit  = (form) => {
    postService
      .updatePost(1, posts.postId, form)
      .then(() => {
        navigate(`/`);
      })
      .catch((error) => {
        if (error.response && error.response.status == 400) {
          alert(error.response.data.message[0]);
        }
      });
  };


  if (posts)
    return (
      <div>
         <PostForm
          initialValue={{
            posttext: posts.posttext,
            image: posts.image,
          }}
          onSubmit={handleSubmit}
        /> 
       
      </div>
    );
};

export default EditPost;
