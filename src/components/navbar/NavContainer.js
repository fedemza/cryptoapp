import React from "react";
import { AppBar, Box, Toolbar, Container, Button } from "@mui/material";
import { Link } from "react-router-dom";

const NavContainer = () => {
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
            <Button
              component={Link}
              to="/"
              style={{ textDecoration: "none" }}
              size="large"
              sx={{
                my: 2,
                color: "white",
                display: "block",
              }}
            >
              INICIO
            </Button>
            <Button
              component={Link}
              to="/coins"
              style={{ textDecoration: "none" }}
              size="large"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              CRIPTOMONEDAS
            </Button>

            <Button
              component={Link}
              to="/about"
              style={{ textDecoration: "none" }}
              size="large"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              SOBRE MI
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavContainer;
