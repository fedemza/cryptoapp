import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";

const PageNotFoundContainer = () => {
  return (
    <main>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 5,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h2"
            variant="h3"
            align="center"
            color="text.primary"
            gutterBottom
          >
            <div>
              <h1>404</h1>
              <br />
              <h3>Página No Encontrada</h3> <br />
            </div>
            <br />
            <Button
              component={Link}
              to="/coins"
              variant="contained"
              size="large"
            >
              Ir a cotizaciones
            </Button>
          </Typography>
        </Container>
      </Box>
    </main>
  );
};

export default PageNotFoundContainer;
