import React from "react";
import PostForm from "./PostForm";
import NavBar from "../../Components/navbar/NavBar";
import Sidebar from "../sidebar/Sidebar";

const PostFormConnector = () => {
  return (
    <div className="home">
      <NavBar />
      <div className="homeContainer">
        <div className="side">
          <Sidebar />
        </div>
        <div>
          <PostForm />
        </div>
      </div>
    </div>
  );
};

export default PostFormConnector;
