import "./Likes.css";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as postService from "../../Service/post";
import { Link } from "react-router-dom";
import ModalImage from "react-modal-image";
import * as likesService from "../../Service/likes";
import * as commentService from "../../Service/comment";
import StarIcon from "@mui/icons-material/Star";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import * as userService from "../../Service/users";

const Likes = () => {
  const params = useParams();

  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();

  const open = Boolean(anchorEl);
  const { pid } = useParams();

  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);

  //Temp lang muna yung parameter na 1 since wala pang login dapar useParam yun
  useEffect(() => {
    setLoading(true);
    postService.fetchPostByUsersUserId(params.id).then((response) => {
      setPosts(response.data);
      setLoading(false);
    });
  }, [params.id]);

  console.log("ito polaaaa" + posts);

  const [likes, setLikes] = useState([]);

  useEffect(() => {
    likesService.getLikes(params.id).then((response) => {
      setLikes(response.data);
      console.log(response.data);
    });
  }, [params.id]);

  const [comment, setComment] = useState([]);

  useEffect(() => {
    commentService.getCommentByPostPostId(pid).then((response) => {
      setComment(response.data);
      console.log(response.data);
    });
  }, [pid]);

  const [user, setUsers] = useState([]);
  //dapat useParam yung parameter pero wala pan login so hardcode value muna
  useEffect(() => {
    userService.getUsersById(params.id).then((response) => {
      setUsers(response.data);
      console.log(response.data);
    });
  }, [params.id]);


  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (posts)
    return (
      <>
        {posts.map((p) => (
          <div className="postdetails">
            <div className="postWrapper">
              <div className="postTop">
                <div className="postTopLeft">
                  <Link to={`/profile/${p.post.users.userId}`}>
                    <img
                      src={p.post.users.profilePic}
                      alt=""
                      className="postProfileImg"
                    />
                  </Link>
                  <div className="postName">
                    {p.post.users.givenName + " " + p.post.users.surname}
                  </div>
                  <div className="postUsername">@{p.post.users.username}</div>
                </div>
              </div>
              <div
                className="postDate"
                style={{ marginTop: "-10px", color: "grey", fontSize: "100%" }}
              >
                {p.post.createdDate}
              </div>
              <div className="postCenter">
                <div className="postText" style={{ fontSize: "115%" }}>
                  {p.post.posttext}
                </div>

                <ModalImage
                  className="postImg"
                  small={p.post.image}
                  medium={p.post.image}
                  alt=""
                />
              </div>

              <div className="postBottom">
                <div className="postBottomLeft">
                  <StarIcon
                    className="bottomLeftIcon"
                    style={{ color: "#E1AD01" }}
                  />
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

              {/* <div className="postBottom">
                <div className="postBottomLeft">
                  <Favorite
                    className="bottomLeftIcon"
                    style={{ color: "red" }}
                  />
                  <ThumbUp className="bottomLeftIcon" />
                  <div className="postLikeCounter">{posts.like}</div>
                </div>
                <div className="postBottomRight">
                  <div className="postCommentText">
                    {posts.comment} · comments · share
                  </div>
                </div>
              </div> */}

              {/* <hr className="footerHr" /> */}
            </div>
            <div className="comment">
              {comment.map((c) => (
                <div key={c.commentId}>
                  <div className="commentWrapper">
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
        ))}
      </>
    );
};

export default Likes;
