import React from "react";
import { Link } from "react-router-dom";
import "./ProfileRightBar.css";
const ProfileRightBar = () => {
  return (
    <div className="profileRightBar">
      <div className="profileRightBarHeading">
        <div className="profileRightBarTitle"> User Information</div>
        <Link to="/profile/userId/edit" style={{ textDecoration: "none" }}>
          <div className="editButton">Edit Profile</div>
        </Link>
      </div>

      <div className="profileRightBarInfo">
        <div className="profileRightBarInfoItem">
          <div className="profileRightBarInfoKey">Email: </div>
          <div className="profileRightBarInfoValue">amberlogan@gmail.com</div>
        </div>
        <div className="profileRightBarInfoItem">
          <div className="profileRightBarInfoKey">Phone Number: </div>
          <div className="profileRightBarInfoValue">+4 123 456 789</div>
        </div>
        <div className="profileRightBarInfoItem">
          <div className="profileRightBarInfoKey">Address: </div>
          <div className="profileRightBarInfoValue">
            Melwood Str. 72 Liverpool
          </div>
        </div>
        <div className="profileRightBarInfoItem">
          <div className="profileRightBarInfoKey">Country: </div>
          <div className="profileRightBarInfoValue">United Kingdom</div>
        </div>
        <div className="profileRightBarInfoItem">
          <div className="profileRightBarInfoKey">Relationship: </div>
          <div className="profileRightBarInfoValue">Single</div>
        </div>
      </div>

      <h4 className="profileRightBarTitle">Close Friends</h4>
      <div className="profileRightBarFollowings">
        <div className="profileRightBarFollowing">
          <img
            src="/assets/person/friend1.jpg"
            alt=""
            className="profileRightBarFollowingImg"
          />
          <div className="profileRightBarFollowingName">Janet</div>
        </div>
        <div className="profileRightBarFollowing">
          <img
            src="/assets/person/friend2.jpg"
            alt=""
            className="profileRightBarFollowingImg"
          />
          <div className="profileRightBarFollowingName">Isabella</div>
        </div>
        <div className="profileRightBarFollowing">
          <img
            src="/assets/person/friend3.jpg"
            alt=""
            className="profileRightBarFollowingImg"
          />
          <div className="profileRightBarFollowingName">Beverly</div>
        </div>
        <div className="profileRightBarFollowing">
          <img
            src="/assets/person/friend4.jpg"
            alt=""
            className="profileRightBarFollowingImg"
          />
          <div className="profileRightBarFollowingName">Glenna</div>
        </div>
        <div className="profileRightBarFollowing">
          <img
            src="/assets/person/friend5.jpg"
            alt=""
            className="profileRightBarFollowingImg"
          />
          <div className="profileRightBarFollowingName">Alexis</div>
        </div>
        <div className="profileRightBarFollowing">
          <img
            src="/assets/person/friend6.jpg"
            alt=""
            className="profileRightBarFollowingImg"
          />
          <div className="profileRightBarFollowingName">Kate</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileRightBar;
