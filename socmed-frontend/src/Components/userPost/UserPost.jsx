import React, { useState, useEffect } from "react";
import "./Post.css";
import { IconButton, MenuItem, Menu } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import { Link } from "react-router-dom";
import ModalImage from "react-modal-image";
import * as postService from "../../Service/post";
import * as userService from "../../Service/users";
import StarIcon from "@mui/icons-material/Star";
import * as likesService from "../../Service/likes";
import * as commentService from "../../Service/comment";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

const UserPost = ({ post }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [likes, setLikes] = useState([]);

  const open = Boolean(anchorEl);
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
  }, [post.postId]);

  //------------THIS IS FOR LIKES BUTTON--------------------
  //sample palang tong user since wala pang login

  const [user, setUsers] = useState([]);
  const params = useParams();

  //dapat useParam yung parameter pero wala pan login so hardcode value muna
  useEffect(() => {
    userService.getUsersById(params.id).then((response) => {
      setUsers(response.data);
      console.log(response.data);
    });
  }, [params.id]);

  const [isActive, setActive] = useState(false);

  const [likesForm, setLikesForm] = useState({
    createdDate: "none",
  });

  const navigate = useNavigate();

  const onSubmit = (layk) => {
    likesService.addLikes(user.userId, post.postId, layk).then((response) => {
      console.log(response);
      navigate("/");
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(likesForm);
  };

  const handleDeletePost = async (postId) => {
    if (postId) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#00796b",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          postService.deletePost(postId);
          // navigate(`/profile/${params.id}`);
          navigate(0);
        }
      });
    }
  };

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            {/* <Link to="/profile/userId"> */}
            <img
              src={post.users.profilePic}
              alt=""
              className="postProfileImg"
            />
            {/* </Link> */}
            <div className="postName">
              {post.users.givenName + " " + post.users.surname}
            </div>
            <div className="postUsername">@{post.users.username}</div>
          </div>

          <div className="postTopRight">
            <IconButton onClick={handleOpenMenu}>
              <MoreVert className="postVertButton" />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleCloseMenu}
            >
              <MenuItem
                onClick={() => navigate(`/post/update/status/${post.postId}`)}
              >
                Edit
              </MenuItem>
              <MenuItem onClick={() => handleDeletePost(post.postId)}>
                Delete
              </MenuItem>
            </Menu>
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
                <IconButton type="submit" onClick={() => setActive(!isActive)}>
                  <div>
                    {isActive ? (
                      <StarIcon sx={{ color: "#E1AD01" }} />
                    ) : (
                      <StarBorderOutlinedIcon className="starIcon" />
                    )}
                  </div>
                </IconButton>
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
        
        </div>
      </div>
    </div>
  );
};

export default UserPost;
