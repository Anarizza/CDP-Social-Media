import React from "react";
import NavBar from "../../Components/navbar/NavBar";
import Sidebar from "../../Components/sidebar/Sidebar";
import "./HomePage.css";
const HomePage = () => {
  return (
    <div className="home">
      <NavBar />
      <div className="homeContainer">
    <Sidebar/>

      </div>
    </div>
  );
};

export default HomePage;
