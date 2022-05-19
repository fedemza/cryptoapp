import React from "react";
import logo from "../../assets/logo.png";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";

const Header = () => {
  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: "#050340" }}>
        <Container
          maxWidth="xl"
          sx={{
            flexGrow: 1,
            display: { md: "flex" },
            justifyContent: "center",
          }}
        >
          <Toolbar>
            <Typography
              variant="h5"
              noWrap
              component="a"
              sx={{
                display: { md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <img
                src={logo}
                height="40px"
                width="40px"
                alt=""
                padding="1px"
                sx={{ ml: 10 }}
              />
            </Typography>

            <Typography
              variant="h5"
              noWrap
              component="a"
              sx={{
                mr: 2,
                ml: 2,
                display: { md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              CRIPTODEMIA
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
