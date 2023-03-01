import React from "react";

import "./Profile.css";
import Feed from "../../Components/feed/Feed";
import NavBar from "../../Components/navbar/NavBar";
import Rightbar from "../../Components/rightbar/Rightbar";
import Sidebar from "../../Components/sidebar/Sidebar";
import { Users } from "../../data/data";
import * as userService from "../../Service/users";
import { useState, useEffect } from "react";
import UserFeedFriends from "../../Components/userFeedFriends/UserFeedFriends";
import { useParams } from "react-router-dom";

const FriendProfile = () => {
  const { id } = useParams();
  const [user, setUsers] = useState([]);
  useEffect(() => {
    userService.getUsersById(id).then((response) => {
      setUsers(response.data);
      console.log(response.data);
    });
  }, []);

  const fullname = user.givenName + " " + user.surname;

  return (
    <div className="profile">
      <div className="profileWrapper">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img src={user.profilePic} alt="" className="profileCoverImg" />
              <img src={user.profilePic} alt="" className="profileUserImg" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{fullname}</h4>
              <span className="profileInfoDesc">Hi Friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <UserFeedFriends />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendProfile;