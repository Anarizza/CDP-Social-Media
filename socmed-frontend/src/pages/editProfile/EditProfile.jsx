import { DriveFolderUploadOutlined } from "@mui/icons-material";
import React from "react";
import NavBar from "../../Components/navbar/NavBar";
import Sidebar from "../../Components/sidebar/Sidebar";
import "./editProfile.css";

const EditProfile = () => {
  return (
    <div className="editProfile">
      <NavBar />
      <div className="editProfileWrapper">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="/assets/profileCover/profilecover.jpg"
                alt=""
                className="profileCoverImg"
              />
              <img
                src="/assets/person/user.jpg"
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Amber Logan</h4>
              <span className="profileInfoDesc">Hi Friends!</span>
            </div>
          </div>
          <div className="editprofileRightBottom">
            <div className="top">
              <h1>Edit User Profile</h1>
            </div>
            <div className="bottom">
              <div className="right">
                <form>
                  <div className="formInput">
                    <label htmlFor="file">
                      Image: <DriveFolderUploadOutlined className="icon" />
                    </label>
                    <input type="file" id="file" style={{ display: "none" }} />
                  </div>
                  <div className="formInput">
                    <label>Name</label>
                    <input type="text" placeholder="Johnny sins" />
                  </div>
                  <div className="formInput">
                    <label>Username</label>
                    <input type="text" placeholder="jane_doe" />
                  </div>
                  <div className="formInput">
                    <label>Email</label>
                    <input type="email" placeholder="jane_doe@gmail.com" />
                  </div>
                  <div className="formInput">
                    <label>Phone</label>
                    <input type="text" placeholder="+4 123 456 789" />
                  </div>
                  <div className="formInput">
                    <label>Address</label>
                    <input
                      type="text"
                      placeholder="Melwood str. 71 Liverpool"
                    />
                  </div>
                  <div className="formInput">
                    <label>Country</label>
                    <input type="text" placeholder="United Kingdom" />
                  </div>
                  <button type="submit" className="updateButton">
                    Update Profile
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
