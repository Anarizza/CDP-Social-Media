import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import "./Navbar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import * as userService from "../../Service/users";
import { useParams } from "react-router-dom";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  //*****************NEWEST CONFIGURATION********************** */
  const params = useParams();
  const [user, setUsers] = useState([]);

  useEffect(() => {
    userService.getUsersById(params.id).then((response) => {
      setUsers(response.data);
      console.log(response.data);
    });
  }, [params.id]);

  return (
    <AppBar position="sticky" sx={{ background: "#00796b", height: "50px" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <div className="bars">
            <img
              src="../../../assets/logo.png"
              alt="logo"
              width="40px"
              height="40px"
            />
          </div>

          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              my: 1,
              mr: 1,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {" "}
            <div className="imeline">IMELINE</div>
          </Typography>
          {/* <div className="navbarCenter">
            <div className="searchBar">
              <SearchIcon className="searchIcon" sx={{ display: "block" }} />
            </div>
          </div> */}

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none", justifyContent: "flex-end" },
              marginLeft: "-10px",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              IMELINE
              <MenuIcon
                fontSize="medium"
                sx={{
                  display: { xs: "flex", justifyContent: "flex-end" },
                  marginLeft: "200px",
                  fontWeight: "400",
                }}
              />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Link
                to={`/profile/${user.userId}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <MenuItem onClick={handleCloseNavMenu} LinkComponent>
                  <AccountCircleIcon />
                  Profile
                </MenuItem>
              </Link>
              <Link
                to={`/homepage/${user.userId}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <HomeIcon /> Home
                </MenuItem>
              </Link>
              {/* <MenuItem onClick={handleCloseNavMenu}>
                <NotificationsIcon /> Notification
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <ChatIcon /> Messages
              </MenuItem> */}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", paddingRight: "100px" },
              flexDirection: "row-reverse",
              p: 1,
              mb: 1,
            }}
          >
            {/* <Link to={`/profile/${user.userId}`}>
              <Button sx={{ my: -1, color: "white", display: "block" }}>
                <img src={user.profilePic} alt="" className="navbarImg" />
              </Button>
            </Link> */}
            <Link to={`/profile/${user.userId}`}>
              <Button sx={{ my: -1, color: "white", display: "block" }}>
                <img src={user.profilePic} alt="" className="navbarImg" />
              </Button>
            </Link>

            {/* <Button sx={{ my: -1, color: "white", display: "block" }}>
              <NotificationsIcon fontSize="medium" />
            </Button>

            <Button sx={{ my: -1, color: "white", display: "block" }}>
              <ChatIcon fontSize="medium" />
            </Button> */}

            <Link to={`/homepage/${user.userId}`}>
              <Button sx={{ my: -1, color: "white", display: "block" }}>
                <HomeIcon fontSize="medium" />
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
