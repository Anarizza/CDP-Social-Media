import React from "react";
import Feed from "../../Components/feed/Feed";
import Rightbar from "../../Components/rightbar/Rightbar";
import Sidebar from "../../Components/sidebar/Sidebar";
import "./HomePage.css";
import NavBar from "../../Components/navbar/NavBar";
import Footer from "../../Components/footer/Footer";
const HomePage = () => {
  return (
    <div className="home">
      <NavBar />
      <div className="homeContainer">
        <Sidebar />
        <Feed className="feed" />
        <Rightbar />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
