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
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import NothFound from "./pages/NotFount/NothFound";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data !== null) {
      setIsLoggedIn(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  const Authhguard = () => {
    return isLoggedIn ? <Navigate to="/" /> : <Outlet />;
  };
  return (
    <>
      <CssBaseline>
        <Routes>
          <Route path="/" element={<Navigate to="/signin" />} />
          <Route
            path="/signin"
            element={
              <Register setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
            }
          />

          <Route element={Authhguard()}>
            <Route path="/homepage/:id" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route
              path="/post/id/:id/:fid"
              element={<DetailsPageConnector />}
            />
            <Route path="/appreciate/:id" element={<LikesConnector />} />
            <Route path="/post/update/status/:id" element={<EditPost />} />
            <Route
              path="/profile/friend/:id/:fid"
              element={<FriendProfile />}
            />
            <Route path="/profile/edit/" element={<EditProfile />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/termsofservices" element={<TermsOfServices />} />
            <Route path="not-found" element={<NothFound />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
          </Route>
        </Routes>
      </CssBaseline>
    </>
  );
};

export default App;
