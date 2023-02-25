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

  const [comment, setComment] = useState([]);
  const [commentOpen, setCommentOpen] = useState(false);
  const [commentBoxVisible, setCommentBoxVisible] = useState(false);
  const [input, setInput] = useState("");

  const [form, setForm] = useState(
    {
     posttext: "",
     image: "",
   
   }
 );

  const handleDeleteComment = async (commentId) => {
    if (commentId) {
      Swal.fire({
        title: "Delete comment?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          commentService.deleteCommentByCommentId(commentId);
          navigate(0);
        }
      });
    }
  };

  const handleComment = () => {};

  useEffect(() => {
    setLoading(true);
    postService.fetchPostById(params.id).then((response) => {
      setPosts(response.data);
      setLoading(false);
      console.log(response.data); // polaaaaaa
    });
  }, [params.id]);

  useEffect(() => {
    setLoading(true);
    commentService.getCommentByPostPostId(params.id).then((response) => {
      setComment(response.data);
      setLoading(false);
      console.log(response.data); // hazeeeell
    });
  }, [params.id]);

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

            <div className="postTopRight">
              <IconButton>
                <MoreVert className="postVertButton" />
              </IconButton>
            </div>
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
              <ThumbUp
                className="bottomLeftIcon"
                style={{ color: "#011631" }}
              />
              <div className="postLikeCounter">{posts.like}</div>
            </div>
            <div className="postBottomRight">
              <div
                className="postCommentText"
                onClick={() => setCommentOpen(!commentOpen)}
              >
                {comment.length} · comments · share
              </div>
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
          <form onSubmit={handleComment} className="commentBox">
            <textarea
              type="text"
              placeholder="Write a comment ..."
              className="commentInput"
              rows={1}
              style={{ resize: "none" }}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" disabled={!input} className="commentPost">
              Comment
            </button>
          </form>
        )}
        {commentOpen > 0 && (
          <div className="comment">
            {comment.map((c) => (
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
                      <MenuItem>Edit</MenuItem>
                      <MenuItem
                        onClick={() => handleDeleteComment(c.commentId)}
                      >
                        Delete
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
        )}
      </div>
    );
};

export default DetailsPage;
