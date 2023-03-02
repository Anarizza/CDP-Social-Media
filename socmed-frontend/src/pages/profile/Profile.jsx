import React from "react";
import "./Profile.css";
import NavBar from "../../Components/navbar/NavBar";
import Rightbar from "../../Components/rightbar/Rightbar";
import Sidebar from "../../Components/sidebar/Sidebar";
import * as userService from "../../Service/users";
import { useState, useEffect } from "react";
import UserFeed from "../../Components/userFeed/UserFeed";
import { useParams } from "react-router-dom";

const Profile = () => {
  const params = useParams();
  const [user, setUsers] = useState([]);
  useEffect(() => {
    userService.getUsersById(params.id).then((response) => {
      setUsers(response.data);
      console.log(response.data);
    });
  }, [params.id]);

  const fullname = user.givenName + " " + user.surname;

  return (
    <div className="profile">
      <NavBar />

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
            <UserFeed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
