import React from "react";
import { CssBaseline } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import DetailsPageConnector from "./pages/detailsPage/DetailsPageConnector";
import LikesConnector from "./pages/likes/LikesConnector";
import "./style/dark.css";
import EditPost from "./Components/editPost/EditPost";
import NavBar from "./Components/navbar/NavBar";
const App = () => {
  return (
    <>
      <CssBaseline>
      <NavBar />

          <Routes>
             <Route path="/" element={<Navigate to="/homepage" />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/post/id/:id" element={<DetailsPageConnector />} /> 
            <Route path="/appreciate/:id" element={<LikesConnector />} />
            <Route path="/post/update/status/:id"element= {<EditPost />}/>
          </Routes>
      </CssBaseline>
    </>
  );
};

export default App;
