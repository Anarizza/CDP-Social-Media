import React, { useState, useEffect } from "react";
import "./Post.css";
import { IconButton } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Favorite,
  ThumbUp,
  ThumbUpAltOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import ModalImage from "react-modal-image";
import * as postService from "../../Service/post";
import ScreenRotationAltIcon from "@mui/icons-material/ScreenRotationAlt";
import StarIcon from "@mui/icons-material/Star";
import StarBorderPurple500SharpIcon from "@mui/icons-material/StarBorderPurple500Sharp";
import * as likesService from "../../Service/likes";
import * as commentService from "../../Service/comment";
import { useParams } from "react-router-dom";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import * as userService from "../../Service/users";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const params = useParams();
  const navigate = useNavigate();

  const [likes, setLikes] = useState([]);

  useEffect(() => {
    likesService.getLikes(post.postId).then((response) => {
      setLikes(response.data);
      console.log(response.data);
    });
  }, []);

  const [comment, setComment] = useState([]);

  useEffect(() => {
    commentService.getCommentByPostPostId(post.postId).then((response) => {
      setComment(response.data);
      console.log(response.data);
    });
  }, []);

  //------------THIS IS FOR LIKES BUTTON--------------------
  //sample palang tong user since wala pang login

  const [user, setUsers] = useState([]);
  //dapat useParam yung parameter pero wala pan login so hardcode value muna
  useEffect(() => {
    userService.getUsersById(params.id).then((response) => {
      setUsers(response.data);
      console.log(response.data);
    });
  }, []);

  const [isActive, setActive] = useState(false);

  const [likesForm, setLikesForm] = useState({
    createdDate: "none",
  });

  const onSubmit = (layk) => {
    likesService.addLikes(user.userId, post.postId, layk).then((response) => {
      console.log(response);
      navigate(`/homepage/${user.userId}`);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(likesForm);
  };

  const showToast = () => {
    toast.success("Shared to your profile!", {
      autoClose: 2000,
    });
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${post.users.userId}`}>
              <img
                src={post.users.profilePic}
                alt=""
                className="postProfileImg"
              />
            </Link>
            <div className="postName">
              {post.users.givenName + " " + post.users.surname}
            </div>
            <div className="postUsername">@{post.users.username}</div>
          </div>
        </div>
        <div
          className="postDate"
          style={{ marginTop: "-10px", color: "grey", fontSize: "100%" }}
        >
          {post.createdDate}
        </div>
        <div className="postCenter">
          <div className="postText" style={{ fontSize: "115%" }}>
            {post.posttext}
          </div>

          <ModalImage
            className="postImg"
            small={post.image}
            medium={post.image}
            alt=""
          />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <StarIcon className="bottomLeftIcon" style={{ color: "#E1AD01" }} />
            <b>{likes.length}</b>
            <div className="postLikeCounter" sx={{ fontSize: "1%" }}>
              <ChatOutlinedIcon sx={{ marginRight: "7px" }} />
              {comment.length}
            </div>
          </div>
          <div className="postBottomRight">
            <div className="postCommentText">
              {/* {comment.length} · comments · share */}
            </div>
          </div>
        </div>

        <hr className="footerHr" />
        <div className="postBottomFooter">
          <Grid>
            <div className="postBottomFooterItem">
              <Grid component="form" onSubmit={handleSubmit}>
                <IconButton
                  type="submit"
                  onClick={showToast} /*onClick={() => setActive(!isActive)}*/
                >
                  <div>
                    {isActive ? (
                      <StarIcon sx={{ color: "#E1AD01" }} />
                    ) : (
                      <StarBorderOutlinedIcon className="footerIcon" />
                    )}
                  </div>
                </IconButton>
                <ToastContainer
                  position={"top-center"}
                  closeOnClick={true}
                  closeButton={<p>x</p>}
                  draggable={false}
                />
              </Grid>
              <div className="footerText">Appreciate</div>
            </div>
          </Grid>

          <Link
            to={`/post/id/${post.postId}`}
            style={{ textDecoration: "none" }}
          >
            <IconButton>
              <div className="postBottomFooterItem">
                <div className="footerText" style={{ fontSize: "11px" }}>
                  See More...
                </div>
              </div>
            </IconButton>
          </Link>
          <div className="postBottomFooterItem">
            <ScreenRotationAltIcon className="footerIcon" />
            <div className="footerText">Share</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
