import React from "react";
import Feed from "../../Components/feed/Feed";
import NavBar from "../../Components/navbar/NavBar";
import Rightbar from "../../Components/rightbar/Rightbar";
import Sidebar from "../../Components/sidebar/Sidebar";
import "./HomePage.css";

import { createContext, useState, useEffect } from "react";
import ReactSwitch from "react-switch";


export const ThemeContext = createContext(null);

const HomePage = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    localStorage.setItem("theme",JSON.stringify(theme=== "light" ? "dark" : "light"));
    setTheme((prevTheme) => prevTheme === "light" ? "dark" : "light");
  };

  useEffect(()=>{
    if(localStorage.getItem("theme")){
     setTheme(JSON.parse(localStorage.getItem("theme")))
    }
  },[]);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <div className="home" id={theme}>
      <NavBar/>
      <div className="homeContainer" id={theme}>
        <Sidebar />
        <Feed className="feed"/>
        <Rightbar />
      </div>
      <div className="switch">
          <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
    </div>
    </ThemeContext.Provider>
  );
};

export default HomePage;
