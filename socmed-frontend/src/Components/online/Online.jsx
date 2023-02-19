import React from 'react'
import "./Online.css";
const Online = ({onlineuser}) => {
  return (
    <div className="online">
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img
          src={onlineuser.profilePicture}
          alt=""
          className="rightbarProfileImg"
        />
        <div className="rightbarOnline"></div>
      </div>
      <div className="rightbarUsername">{onlineuser.username}</div>
    </li>
  </div>
);
};

export default Online;