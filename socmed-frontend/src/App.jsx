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
import FriendProfile from "./pages/friendProfile/FriendProfile";
import EditProfile from "./pages/editProfile/EditProfile";
import Footer from "./Components/footer/Footer";
import About from "./pages/footer/About";
import PrivacyPolicy from "./pages/footer/PrivacyPolicy";
import TermsOfServices from "./pages/footer/TermsOfServices";

const App = () => {
  return (
    <>
      <CssBaseline>
        <Routes>
          <Route path="/" element={<Navigate to="/signin" />} />
          <Route path="/homepage/:id" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Register />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/post/id/:id" element={<DetailsPageConnector />} />
          <Route path="/appreciate/:id" element={<LikesConnector />} />
          <Route path="/post/update/status/:id" element={<EditPost />} />
          <Route path="/profile/friend/:id/:fid" element={<FriendProfile />} />
          <Route path="/profile/edit/" element={<EditProfile />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/termsofservices" element={<TermsOfServices />} />
        </Routes>
      </CssBaseline>
    </>
  );
};

export default App;
