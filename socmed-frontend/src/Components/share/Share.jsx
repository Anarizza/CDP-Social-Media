import React, { useState, useEffect } from "react";
import { Close, EmojiEmotions, PermMedia } from "@mui/icons-material";
import "./Share.css";
import SendIcon from "@mui/icons-material/Send";
import * as postService from "../../Service/post";

const Share = () => {
  const [file, setFile] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postService.addPost().then((response) => {
      setPosts(response.data);
      console.log(response.data);
    });
  }, []);

  const removeImage = () => {
    setFile(null);
  };
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src="./assets/person/user.jpg"
            alt=""
            className="shareProfileImg"
          />
          <input
            type="text"
            placeholder="What's happening?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        {file && (
          <div className="shareImgContainer">
            <img src={URL.createObjectURL(file)} alt="" className="shareImg" />
            <Close className="shareCancelImg" onClick={removeImage} />
          </div>
        )}
        <div className="shareBottom">
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMedia className="shareIcon" style={{ color: "#2e0196f1" }} />
              <div className="shareOptionText">Image</div>
              <input
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className="shareOption">
              <EmojiEmotions
                className="shareIcon"
                style={{ color: "#bfc600ec" }}
              />
              <div className="shareOptionText">Feelings/Activity</div>
            </div>
            <div className="shareOption">
              <SendIcon className="shareIcon" style={{ color: "#0399f4" }} />
              <div className="shareOptionText">Share</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
