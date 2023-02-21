import React, { useState, useEffect } from "react";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import "./Sidebar.css";
import MenuLink from "../menuLink/MenuLink";
import Friends from "../friends/Friends";
import * as usersService from "../../Service/users";
import BookmarkIcon from '@mui/icons-material/Bookmark';
const Sidebar = () => {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    usersService.getUsers().then((response) => {
      setUsers(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <MenuLink Icon={<RssFeedIcon />} text="Feed" />
        <MenuLink Icon={<BookmarkIcon />} text="Saved" />
          <MenuLink Icon={<Brightness4Icon />} text="Theme" />
        <MenuLink Icon={<ExitToAppOutlinedIcon />} text="Logout" />

        <hr className="sidebarHr" />
       

        <h4>Friend List</h4>
        <ul className="sidebarFriendList">
        {users.map((u) => (
          <Friends key={u.id} user={u} />
        ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;