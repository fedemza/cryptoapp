import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CoinsCards from "./CoinsCards";

const theme = createTheme();

const Home = () => {
  return (
    <ThemeProvider
      theme={theme}
      background-image=" https://www.freepik.es/vectores/bitcoin"
      sx={{ backgroundimage: "https://www.freepik.es/vectores/bitcoin" }}
    >
      <CssBaseline />

      <main>
        {/* Hero unit */}
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
              <Link href="/coins">
                <Button variant="contained">Cotizaciones</Button>
              </Link>
            </Stack>
          </Container>
        </Box>
        <CoinsCards />
      </main>
    </ThemeProvider>
  );
};

export default Home;
