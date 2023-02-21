import React from "react";
import "./Friends.css";

const Friends = ({ user }) => {
  return (
    <div>
      <div className="sidebarFriend">
        <img src={user.profilePic} alt="" className="sidebarFriendImg" />
        <div className="sidebarFriendName">@{user.username}</div>
      </div>
    </div>
  );
};

export default Friends;
