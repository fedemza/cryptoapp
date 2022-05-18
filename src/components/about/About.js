import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import fede from "../../assets/fede.jpg";

const theme = createTheme();

const About = () => {
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
          <Box sx={{ display: { md: "flex" }, justifyContent: "center" }}>
            <img
              src={fede}
              height="512"
              width="384"
              alt=" not found"
              style={{ borderRadius: "100px" }}
              // style="border-radius: 5px"
              sx={{
                display: { md: "flex" },
                justifyContent: "center",
              }}
            />
          </Box>

          <Container maxWidth="sm">
            <Typography
              component="h4"
              variant="h5"
              align="center"
              color="text.primary"
              gutterBottom
            >
              <h1>Sobre mi</h1> <br />
              Hola, Soy Fede y te voy a contar un poquito sobre mi. <br />
              Soy Licenciado en Economía con un MBA especializado en Finanzas.
              <br />
              Nací en Mendoza pero hace casi 4 años que estoy viviendo en
              Córdoba. Vine para abrir un emprendimiento junto a otros dos
              socios. En 2021 decidí darle un giro a mi carrera profesional.
              Vendí mi parte de la sociedad y me puse a estudiar programación.
              Comencé con el Bootcamp de Desarrollador Fullstack de Henry que
              finalicé en febrero de 2022. Fueron 4 meses muy intensos que me
              sirvieron para entender las bases de la programacion y para
              desarrolladorar mis primeras aplicaciones. Desde ese momento sigo
              estudiando y aprendiendo cosas nuevas todos los días de este
              fascinante mundo.
              <br />
              Además, desde abril de este año soy tutor del curso de
              programacion backend de CoderHouse. Es un desafío muy lindo poder
              ayudar a otros alumnos a desarrollarse profesionalmente.
              <br />
              Por otro lado, como proyecto personal, el año pasado comencé a
              estudiar mucho sobre criptomonedas, además de invertir, también
              decidí abrir un instagram{" "}
              <Link href="https://www.instagram.com/criptodemia/">
                criptodemia
              </Link>
              , que te invito a visitar, para compartir información de manera
              gratuita ahi para ayudar a los demás.
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              <br />
              <br />
              TECNOLOGÍAS: JAVASCRIPT/ HTML / CSS/ REACT/ REDUX/ NODE / EXPRESS
              / SQL/ PYTHON /POSTGRESQL/MONGODB
            </Typography>
            <Stack
              sx={{ pt: 0 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            ></Stack>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
};

export default About;
