import React from "react";

import "./Profile.css";
import Feed from "../../Components/feed/Feed";
import NavBar from "../../Components/navbar/NavBar";
import Rightbar from "../../Components/rightbar/Rightbar";
import Sidebar from "../../Components/sidebar/Sidebar";
import { Users } from "../../data/data";
import * as userService from "../../Service/users";
import { createContext, useState, useEffect } from "react";
import UserFeed from "../../Components/userFeed/UserFeed";

export const ThemeContext = createContext(null);

const Profile = () => {
  const [user, setUsers] = useState([]);
  useEffect(() => {
    userService.getUsersById(1).then((response) => {
      setUsers(response.data);
      console.log(response.data);
    });
  }, []);

  const fullname = user.givenName + " " + user.surname;

  const a = JSON.parse(localStorage.getItem("theme"));
  return (
    <div className="profile" >
      <NavBar />
      <div className="profileWrapper" id={a}>
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
            <UserFeed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;