import React from 'react';
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ChatIcon from "@mui/icons-material/Chat";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="navbarContainer">
      <div className="image">
        <img src="./assets/logo.png" width="40px" height="40px" />
      </div>
      <div className="navbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="logo">IMELINE</div>
        </Link>
      </div>
      <div className="navbarCenter">
        <div className="searchBar">
          <SearchIcon className="searchIcon" />
          <input type="text" placeholder="Search" className="searchInput" />
        </div>
      </div>
      <div className="navbarRight">
        <div className="navbarLinks">       
        </div>
      
        <div className="navbarIcons">
          <HomeIcon />

          <div className="navbarIconItem">
            <NotificationsIcon />

            <div className="navbarIconBadge">10</div>
          </div>
          <div className="navbarIconItem">
            <ChatIcon />

            <div className="navbarIconBadge">8</div>
          </div>
        </div>
        <Link to="/profile">
          <img src="/assets/person/user.jpg" alt="" className="navbarImg" />
        </Link>
      </div>
    </div>
  );
};


export default NavBar
