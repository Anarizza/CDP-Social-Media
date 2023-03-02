import React from "react";

import "./Profile.css";
import Rightbar from "../../Components/rightbar/Rightbar";
import Sidebar from "../../Components/sidebar/Sidebar";
import * as userService from "../../Service/users";
import { useState, useEffect } from "react";
import UserFeedFriends from "../../Components/userFeedFriends/UserFeedFriends";
import { useParams } from "react-router-dom";
import Navbar from "../navbar/Navbar";
const FriendProfile = () => {
  const { fid } = useParams();
  const [user, setUsers] = useState([]);
  useEffect(() => {
    userService.getUsersById(fid).then((response) => {
      setUsers(response.data);
      console.log(response.data);
    });
  }, []);

  const fullname = user.givenName + " " + user.surname;

  return (
    <div className="profile">
      <Navbar />
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
