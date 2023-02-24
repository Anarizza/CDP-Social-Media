import React, { useState, useEffect } from "react";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import "./Sidebar.css";
import MenuLink from "../menuLink/MenuLink";
import Friends from "../friends/Friends";
import * as usersService from "../../Service/users";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import "../../style/dark.css";

const Sidebar = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    usersService.getUsers().then((response) => {
      setUsers(response.data);
      console.log(response.data);
    });
  }, []);

  const [theme, setTheme] = useState(false);

  const handleClick = () => {
    setTheme(!theme);
  };
  useEffect(() => {
    if (theme === true) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  });

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <MenuLink Icon={<RssFeedIcon />} text="Feed" />
        <MenuLink Icon={<BookmarkIcon />} text="Saved" />
        <div onClick={handleClick}>
          {theme ? "" : ""}
          <MenuLink Icon={<Brightness4Icon />} text="Theme" />
        </div>
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
