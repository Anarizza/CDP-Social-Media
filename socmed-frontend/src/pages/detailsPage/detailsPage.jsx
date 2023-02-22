import MoreVertIcon from "@mui/icons-material/MoreVert";
import Sidebar from "../../Components/sidebar/Sidebar";
import "./detailsPage.css";
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../../Components/navbar/NavBar";
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


const DetailsPage = () => {

  const params = useParams();

  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();

  const open = Boolean(anchorEl);

  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    postService.fetchPostById(params.id).then((response) => {
      setPosts(response.data);
      setLoading(false);
    });
  }, [params.id]);

  console.log('ito polaaa: '+posts)

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
            <div className="postName">{posts.users.givenName +' '+ posts.users.surname}</div>
            <div className="postUsername">@{posts.users.username}</div>
          </div>

          <div className="postTopRight">
            <IconButton>
              <MoreVert className="postVertButton" />
            </IconButton>
          </div>
        </div>
        <div className="postDate">{posts.created_date}</div>
        <div className="postCenter">
          <div className="postText">{posts.post_text}</div>

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
            <ThumbUp className="bottomLeftIcon" style={{ color: "#011631" }} />
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
  );

}

export default DetailsPage;