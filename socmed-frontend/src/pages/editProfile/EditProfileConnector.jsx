import React from "react";
import EditProfile from "./EditProfile";
import NavBar from "../../Components/navbar/NavBar";
import Sidebar from "../../Components/sidebar/Sidebar";
const EditProfileConnector = () => {
  return (
    <div className="home">
      <NavBar />
      <div className="homeContainer">
        <div className="side">
          <Sidebar />
        </div>
        <div>
          <EditProfile />
        </div>
      </div>
    </div>
  );
};

export default EditProfileConnector;
