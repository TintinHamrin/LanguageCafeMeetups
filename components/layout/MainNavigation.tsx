import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import classes from "./MainNavigation.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const MainNavigation = () => {
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const routerHandler = (path: string) => {
    router.push(`/${path}`);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={(evt) => routerHandler("")}
            color="inherit"
          >
            <EmojiFlagsIcon />
          </IconButton>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
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
              <MenuItem key={1} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">About Language Cafes</Typography>
              </MenuItem>
              <MenuItem key={2} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">All Meetups</Typography>
              </MenuItem>
              <MenuItem key={3} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Add a Meetup</Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Box
            className={classes.appbarItems}
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            <Button
              key={1}
              onClick={(evt) => routerHandler("add-meetup")}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              About Language Cafes
            </Button>
            <Button
              key={2}
              sx={{ my: 2, color: "white", display: "block" }}
              onClick={(evt) => routerHandler("meetups")}
            >
              All Meetups
            </Button>
            <Button
              key={3}
              sx={{ my: 2, color: "white", display: "block" }}
              onClick={(evt) => routerHandler("add-meetup")}
            >
              Add a Meetup
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            ></Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default MainNavigation;
