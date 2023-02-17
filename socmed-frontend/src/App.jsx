import React from "react";
import { CssBaseline } from "@mui/material";
import { Container } from "@mui/system";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";

const App = () => {
  return (
    <>
      <CssBaseline>
        <Container>
          <Routes>
            <Route path="/" element={<Navigate to="/homepage" />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Container>
      </CssBaseline>
    </>
  );
};

export default App;
