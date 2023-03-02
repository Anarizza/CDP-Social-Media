import React from "react";
import "./ProfileRightBar.css";
import * as userService from "../../Service/users";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ProfileRightBar = () => {
  const params = useParams();
  const [user, setUsers] = useState([]);
  useEffect(() => {
    userService.getUsersById(params.id).then((response) => {
      setUsers(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div className="profileRightBar">
      {/* <div className="profileRightBarHeading">
        <div className="profileRightBarTitle"> User Information</div>
        <Link to="/profile/edit" style={{ textDecoration: "none" }}>
          <div className="editButton">Edit Profile</div>
        </Link>
      </div>

      <div className="profileRightBarInfo">
        <div className="profileRightBarInfoItem">
          <div className="profileRightBarInfoKey">Email: </div>
          <div className="profileRightBarInfoValue">{user.email}</div>
        </div>
        <div className="profileRightBarInfoItem">
          <div className="profileRightBarInfoKey">Age: </div>
          <div className="profileRightBarInfoValue">{}</div>
        </div>
        <div className="profileRightBarInfoItem">
          <div className="profileRightBarInfoKey">City: </div>
          <div className="profileRightBarInfoValue">{user.city}</div>
        </div>
      </div> */}

      <h4 className="profileRightBarTitle">People you may know</h4>
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
