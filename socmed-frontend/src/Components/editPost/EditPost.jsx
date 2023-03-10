import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as postService from "../../Service/post";
import PostForm from "../form/PostForm";
import * as userService from "../../Service/users";

const EditPost = () => {
  const params = useParams();

  const navigate = useNavigate();
  const [user, setUsers] = useState([]);
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    userService.getUsersById(user.userId).then((response) => {
      setUsers(response.data);
      console.log(response.data);
    });
  }, [user.userId]);

  useEffect(() => {
    setLoading(true);
    postService.fetchPostById(params.id).then((response) => {
      setPosts(response.data);
      setLoading(false);
    });
  }, [params.id]);


  const handleSubmit  = (form) => {
    postService
      .updatePost(user.userId, posts.postId, form)
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
