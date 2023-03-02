import React, { useState, useEffect } from "react";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import "./Sidebar.css";
import MenuLink from "../menuLink/MenuLink";
import Friends from "../friends/Friends";
import * as usersService from "../../Service/users";
import "../../style/dark.css";
import StarBorderPurple500SharpIcon from "@mui/icons-material/StarBorderPurple500Sharp";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [users, setUsers] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    usersService.getUsers().then((response) => {
      setUsers(response.data);
      // console.log(response.data);
    });
  }, []);

  const [theme, setTheme] = useState("light");
  const handleClick = () => {
    localStorage.setItem(
      "theme",
      JSON.stringify(theme === "light" ? "dark" : "light")
    );
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    if (localStorage.getItem("theme")) {
      setTheme(JSON.parse(localStorage.getItem("theme")));
    }
  });

  const navigate = useNavigate;

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        {/* Need pa to ayusin */}
        <Link    to={`/homepage/${1}`}
          style={{
            textDecoration: "none",
            color: theme === "light" ? "black" : "white",
          }}>
        <MenuLink Icon={<RssFeedIcon />} text="Feed" />
        </Link>
        {/*Temposry lang yung parameter na 1 kas dapat userId yun since wala pang login*/}
        <Link
          to={`/appreciate/${1}`}
          style={{
            textDecoration: "none",
            color: theme === "light" ? "black" : "white",
          }}
        >
          <MenuLink Icon={<StarBorderPurple500SharpIcon />} text="Appreciate" />
        </Link>
        <div onClick={handleClick}>
          <MenuLink Icon={<Brightness4Icon />} text="Theme" />
        </div>
        <MenuLink Icon={<ExitToAppOutlinedIcon />} text="Logout" />

        <hr className="sidebarHr" />

        <h4>People on Timeline</h4>
        <ul className="sidebarFriendList">
          {users.map((u) => (
            <Link
              to={`/profile/friend/${id}/${u.userId}`}
              style={{
                textDecoration: "none",
              }}
            >
              <Friends key={u.id} user={u} />
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
