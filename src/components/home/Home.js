import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CoinsCards from "./CoinsCards";

const theme = createTheme();

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 0,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Bienvenido
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              En este sitio, podrás tener toda la informacion actualizada en
              tiempo real del mundo de las criptomonedas.
            </Typography>

            <Stack
              sx={{ pt: 0 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button component={Link} to="/coins" variant="contained">
                Cotizaciones
              </Button>
            </Stack>
          </Container>
        </Box>

        <CoinsCards />
      </main>
    </ThemeProvider>
  );
};

export default Home;
