import React from "react";
import Feed from "../../Components/feed/Feed";
import NavBar from "../../Components/navbar/NavBar";
import Sidebar from "../../Components/sidebar/Sidebar";
import "./HomePage.css";
const HomePage = () => {
  return (
    <div className="home">
      <NavBar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
};

export default HomePage;
