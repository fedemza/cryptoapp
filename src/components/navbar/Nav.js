import React from "react";
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
            <Button
              href="/"
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
              href="/coins"
              style={{ textDecoration: "none" }}
              size="large"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              CRIPTOMONEDAS
            </Button>

            <Button
              href="/about"
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

export default Nav;
