import "./Likes.css";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as postService from "../../Service/post";
import { Link } from "react-router-dom";
import ModalImage from "react-modal-image";
import {
  Favorite,
  ThumbUp,
  ThumbUpAltOutlined,
  ShareOutlined,
} from "@mui/icons-material";
const Likes = () => {
  const params = useParams();

  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();

  const open = Boolean(anchorEl);

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
              </div>

              <hr className="footerHr" />
              <div className="postBottomFooter">
                <div className="postBottomFooterItem">
                  <ThumbUpAltOutlined className="footerIcon" />
                  <div className="footerText">Like</div>
                </div>

                <div className="postBottomFooterItem">
                  <ShareOutlined className="footerIcon" />
                  <div className="footerText">Share</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    );
};

export default Likes;
