import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "./detailsPage.css";
import { IconButton, Menu, MenuItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as postService from "../../Service/post";
import { Link } from "react-router-dom";
import ModalImage from "react-modal-image";
import {
  ChatBubbleOutline,
  MoreVert,
  Favorite,
  ThumbUp,
  ThumbUpAltOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import * as commentService from "../../Service/comment";
// import * as likeService from "../../Service/like";
import Joi from "joi";
import * as userService from "../../Service/users";

import Swal from "sweetalert2";

const DetailsPage = () => {
  const params = useParams();

  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();

  const open = Boolean(anchorEl);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);

  const [user, setUsers] = useState([]);
  const [comment, setComment] = useState([]);
  const [commentBoxVisible, setCommentBoxVisible] = useState(false);

  const [likes, setLikes] = useState([]);

  // add comment
  const [form, setForm] = useState({
    commenttext: "",
  });
  // add comment function in service
  const onSubmit = (comm) => {
    commentService
      .addComment(user.userId, posts.postId, comm)
      .then((response) => {
        console.log(response);
      });
    navigate(0);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(form);
  };
  const [errors, setErrors] = useState({});

  const handleChange = ({ currentTarget: input }) => {
    setForm({
      [input.name]: input.value,
    });

    const result = schema
      .extract(input.name)
      .label(input.name)
      .validate(input.value);

    if (result.error) {
      setErrors({ ...errors, [input.name]: result.error.details[0].message });
    } else {
      delete errors[input.name];
      setErrors(errors);
    }
  };
  const schema = Joi.object({
    commenttext: Joi.string().min(1).max(100).required(),
  });

  const isFormInvalid = () => {
    const result = schema.validate(form);
    return !!result.error;
  };

  const handleChange2 = (event) => {
    console.log(event.currentTarget.value);
    setForm({
      ...form,
      commenttext: event.currentTarget.value,
    });
  };

  const handleDeleteComment = async (commentId) => {
    if (commentId) {
      Swal.fire({
        title: "Delete comment?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Delete",
      }).then((result) => {
        if (result.isConfirmed) {
          commentService.deleteCommentByCommentId(commentId);
          navigate(0);
        }
      });
    }
  };

  useEffect(() => {
    setLoading(true);
    postService.fetchPostById(params.id).then((response) => {
      setPosts(response.data);
      setLoading(false);
      // console.log(response.data); // polaaaaaa
    });
  }, [params.id]);

  useEffect(() => {
    setLoading(true);
    commentService.getCommentByPostPostId(params.id).then((response) => {
      setComment(response.data);
      setLoading(false);
      // console.log(response.data); // hazeeeell
    });
  }, [params.id]);

  // get User by ID
  useEffect(() => {
    userService.getUsersById(params.id).then((response) => {
      setUsers(response.data);
      console.log(response.data);
    });
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (posts)
    return (
      <div className="postdetails">
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <Link to="/profile/userId">
                <img
                  src={posts.users.profilePic}
                  alt=""
                  className="postProfileImg"
                />
              </Link>
              <div className="postName">
                {posts.users.givenName + " " + posts.users.surname}
              </div>
              <div className="postUsername">@{posts.users.username}</div>
            </div>

            {/* <div className="postTopRight">
              <IconButton>
                <MoreVert className="postVertButton" />
              </IconButton>
            </div> */}
          </div>
          <div
            className="postDate"
            style={{ marginTop: "-10px", color: "grey", fontSize: "100%" }}
          >
            {posts.createdDate}
          </div>
          <div className="postCenter">
            <div className="postText" style={{ fontSize: "115%" }}>
              {posts.posttext}
            </div>

            <ModalImage
              className="postImg"
              small={posts.image}
              medium={posts.image}
              alt=""
            />
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
              <Favorite className="bottomLeftIcon" style={{ color: "red" }} />
              <ThumbUp className="bottomLeftIcon" />
              <div className="postLikeCounter">{likes}</div>
            </div>
            <div className="postBottomRight">
              <div className="postCommentText">{comment.length} · comments</div>
            </div>
          </div>

          <hr className="footerHr" />
          <div className="postBottomFooter">
            <div className="postBottomFooterItem">
              <ThumbUpAltOutlined className="footerIcon" />
              <div className="footerText">Like</div>
            </div>

            <div
              className="postBottomFooterItem"
              onClick={() => setCommentBoxVisible(!commentBoxVisible)}
            >
              <ChatBubbleOutline className="footerIcon" />
              <span className="footerText">Comment</span>
            </div>
            <div className="postBottomFooterItem">
              <ShareOutlined className="footerIcon" />
              <div className="footerText">Share</div>
            </div>
          </div>
        </div>
        {commentBoxVisible && (
          <form className="commentBox" onSubmit={handleSubmit}>
            <input
              name="commenttext"
              type="text"
              rows={1}
              style={{ resize: "none" }}
              value={form.commenttext}
              onChange={handleChange2}
              placeholder="Write a comment ..."
              className="commentInput"
            />
            <button
              type="submit"
              className="commentPost"
              disabled={isFormInvalid()}
            >
              Comment
            </button>
          </form>
        )}

        <div className="comment">
          {[...comment].reverse().map((c) => (
            <div key={c.commentId}>
              <div className="commentWrapper">
                <div className="commentOptions">
                  <IconButton onClick={handleOpenMenu}>
                    <MoreHorizIcon className="commentVertButton" />
                  </IconButton>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleCloseMenu}
                  >
                    <MenuItem onClick={() => handleDeleteComment(c.commentId)}>
                      Delete Comment
                    </MenuItem>
                  </Menu>
                </div>
                <img
                  className="commentProfileImg"
                  src={c.post.users.profilePic}
                  alt=""
                />

                <div className="commentInfo">
                  <div className="commentUsername">
                    @{c.post.users.username.toLowerCase()}
                  </div>
                  <div className="commentText">{c.commenttext} </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default DetailsPage;
