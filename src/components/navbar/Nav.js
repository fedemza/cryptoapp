import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Box, Toolbar, Container, Button } from "@mui/material";

const Nav = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
              display: { md: "flex" },
              justifyContent: "center",
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                size="large"
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                }}
              >
                INICIO
              </Button>
            </Link>
            <Link to="/coins" style={{ textDecoration: "none" }}>
              <Button
                size="large"
                sx={{ my: 2, color: "white", display: "block" }}
              >
                CRIPTOMONEDAS
              </Button>
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <Button
                size="large"
                sx={{ my: 2, color: "white", display: "block" }}
              >
                SOBRE MI
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Nav;
