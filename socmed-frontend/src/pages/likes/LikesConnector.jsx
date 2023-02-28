import { Card, CardContent } from '@mui/material';
import React from 'react'
import Likes from './Likes';
import Sidebar from '../../Components/sidebar/Sidebar';
import Rightbar from '../../Components/rightbar/Rightbar';
import "./LikesConnector.css";
import NavBar from '../../Components/navbar/NavBar';
const LikesConnector = () => {
  return (
    <div className="home">
                  <NavBar />

    <div className="homeContainer">
      <div className="side">
      <Sidebar />
      </div>
     
      <div>
      <Likes />
      </div>
     
    </div>
  </div>
  )
}

export default LikesConnector;
