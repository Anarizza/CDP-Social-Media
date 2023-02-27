import React, { useState, useEffect } from "react";
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
import * as postService from "../../Service/post";
import ScreenRotationAltIcon from "@mui/icons-material/ScreenRotationAlt";
import StarIcon from "@mui/icons-material/Star";
import StarBorderPurple500SharpIcon from "@mui/icons-material/StarBorderPurple500Sharp";
import * as likestService from "../../Service/likes";
import * as commentService from "../../Service/comment";
import { useParams } from "react-router-dom";
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';



const Post = ({ post }) => {
  // const params = useParams();

  // const [comment, setComment] = useState([]);

  // useEffect(() => {
  //   commentService.getCommentByPostPostId(params.id).then((response) => {
  //     setComment(response.data);
  //     console.log(response.data); // hazeeeell
  //   });
  // }, [params.id]);

  const [likes, setLikes] = useState([]);

  useEffect(() => {
    likestService.getLikes(post.postId).then((response) => {
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
            <StarIcon className="bottomLeftIcon" style={{ color: "#E1AD01" }} /><b>{likes.length}</b>
            <div className="postLikeCounter" sx={{fontSize: "1%"}}><ChatOutlinedIcon  sx={{marginRight: "7px"}}/>{comment.length}</div>
          </div>
          <div className="postBottomRight">
            <div className="postCommentText">
              {/* {comment.length} · comments · share */}
            </div>
          </div>
        </div>

        <hr className="footerHr" />
        <div className="postBottomFooter">
          <div className="postBottomFooterItem">
            <StarBorderPurple500SharpIcon className="footerIcon" />
            <div className="footerText">Appreciate</div>
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
