import { Card, CardContent } from "@mui/material";
import React from "react";
import DetailsPage from "./detailsPage";
import Sidebar from "../../Components/sidebar/Sidebar";
import Rightbar from "../../Components/rightbar/Rightbar";
import "./DetailsPageConnector.css";
import NavBar from "../../Components/navbar/NavBar";
const DetailsPageConnector = () => {
  return (
    <div className="home">
                  <NavBar />

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
