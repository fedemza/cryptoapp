import React from "react";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
const FooterContainer = () => {
  return (
    <footer>
      <Box px={{ xs: 2, sm: 10 }} py={{ xs: 5, sm: 2 }} bgcolor="#95A5A6">
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={6} sm={2}>
              <Box>
                <Link to="/contact" style={{ color: "#17202A" }}>
                  Contacto
                </Link>
              </Box>
              <Box>
                <Link to="/support" style={{ color: "#17202A" }}>
                  Soporte
                </Link>
              </Box>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <a href="https://www.facebook.com/">
                <img alt="facebook" src={facebook} />
              </a>
            </Grid>
            <Grid item>
              <a href="https://www.instagram.com/criptodemia/">
                <img alt="instagram" src={instagram} />
              </a>
            </Grid>
            <Grid item>
              <a href="https://twitter.com/home">
                <img alt="twitter" src={twitter} />
              </a>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
};

export default FooterContainer;
