import React from "react";
import DetailsPage from "./detailsPage";
import Sidebar from "../../Components/sidebar/Sidebar";
import "./DetailsPageConnector.css";
import Navbar from "../navbar/Navbar";
const DetailsPageConnector = () => {
  return (
    <div className="home">
      <Navbar/>
      <div className="homeContainer">
        <div className="side">
          <Sidebar />
        </div>
        <div>
          <DetailsPage />
        </div>
      </div>
    </div>
  );
};

export default DetailsPageConnector;
