import React from "react";
import "./Post.css";
import { IconButton } from "@mui/material";
import {
  Favorite,
  ThumbUp,
  ThumbUpAltOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import ModalImage from "react-modal-image";

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to="/profile/userId">
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
          {post.created_date}
        </div>
        <div className="postCenter">
          <div className="postText" style={{ fontSize: "115%" }}>
            {post.post_text}
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
            <Favorite className="bottomLeftIcon" style={{ color: "red" }} />
            <ThumbUp className="bottomLeftIcon" style={{ color: "#011631" }} />
            <div className="postLikeCounter">{post.like}</div>
          </div>
          <div className="postBottomRight">
            <div className="postCommentText">
              {post.comment} · comments · share
            </div>
          </div>
        </div>

        <hr className="footerHr" />
        <div className="postBottomFooter">
          <div className="postBottomFooterItem">
            <ThumbUpAltOutlined className="footerIcon" />
            <div className="footerText">Like</div>
          </div>
          <Link
            to={`/post/id/${post.postId}`}
            style={{ textDecoration: "none" }}
          >
            <IconButton>
              <div className="postBottomFooterItem">
                <div
                  className="footerText"
                  style={{ fontSize: "11px", color: "black" }}
                >
                  See More..
                </div>
              </div>
            </IconButton>
          </Link>
          <div className="postBottomFooterItem">
            <ShareOutlined className="footerIcon" />
            <div className="footerText">Share</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
