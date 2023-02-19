import React from "react";
import "./Friends.css";
const Friends = ({ user }) => {
  return (
    <div>
      <li className="sidebarFriend">
        <img src={user.profilePicture} alt="" className="sidebarFriendImg" />
        <div className="sidebarFriendName">{user.username}</div>
      </li>
    </div>
  );
};

export default Friends;
