import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import "./navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "./assets/gtr.png";
import { Link, NavLink } from "react-router-dom";
;

const Navbar = () => {


  return (
    <>
      <AppBar position="static" sx={{ background: "#222" }}>
        <Toolbar>
          <Link to={"/"} style={{textDecoration:'none', color:'inherit'}}>
            <Box display={"flex"} alignItems={"center"}>
              <img className="logo" src={Logo} alt="Logo" />
              <Typography variant="h3">SIMON'S GUITARS</Typography>
            </Box>
          </Link>
          <Box sx={{ marginLeft: "auto" }}>
            <NavLink to={"/"} style={{textDecoration:'none', color:'inherit'}}>
              <Button color="inherit" sx={{ m: 2 }}>
                Home
              </Button>
            </NavLink>
            <NavLink to={`category/guitarra`} style={{textDecoration:'none', color:'inherit'}}>
              <Button color="inherit" sx={{ m: 2 }}>
                Guitarras
              </Button>
            </NavLink>
            <NavLink to={`category/bajo`} style={{textDecoration:'none', color:'inherit'}}>
              <Button color="inherit" sx={{ m: 2 }} >
                Bajos
              </Button>
            </NavLink>
            <NavLink to={'/cart'} style={{textDecoration:'none', color:'inherit'}}>
              <Button color="inherit" sx={{ m: 2 }}>
                <CartWidget />
              </Button>
            </NavLink>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;