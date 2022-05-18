import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
const Footer = () => {
  return (
    <footer>
      <Box
        px={{ xs: 2, sm: 10 }}
        py={{ xs: 5, sm: 2 }}
        bgcolor="text.secondary"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={6} sm={2}>
              <Box>
                <Link href="/" color="inherit">
                  Ayuda
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Contacto
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Soporte
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Privacidad
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
              <Link href="https://www.facebook.com/">
                <img alt="facebook" src={facebook} />
              </Link>
            </Grid>
            <Grid item>
              <Link href="https://www.instagram.com/criptodemia/">
                <img alt="instagram" src={instagram} />
              </Link>
            </Grid>
            <Grid item>
              <Link href="https://twitter.com/home">
                <img alt="twitter" src={twitter} />
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
