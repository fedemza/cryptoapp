import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Paper } from "@mui/material";
import ethereum from "../../assets/ethereum.png";
import bitcoin from "../../assets/bitcoin.png";
import bnb from "../../assets/bnb.png";

const CoinsCards = () => {
  return (
    <Paper>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  pt: "20%",
                }}
                image={ethereum}
                alt="image"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Ethereum
                </Typography>
                <Typography>
                  Ethereum es un sistema blockchain de código abierto
                  descentralizado que incluye su propia criptomoneda, Ether. ETH
                  funciona como plataforma para otras numerosas criptomonedas,
                  así como para la ejecución de contratos inteligentes
                  descentralizados.
                </Typography>
              </CardContent>
              <CardActions>
                <Button component={Link} to="/coins/ethereum" size="medium">
                  Detalles
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  pt: "20%",
                }}
                image={bitcoin}
                alt="image"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Bitcoin
                </Typography>
                <Typography>
                  Bitcoin es una criptomoneda descentralizada presentada
                  originalmente en un documento técnico en 2008 por una persona,
                  o grupo de personas, utilizando el alias Satoshi Nakamoto. Se
                  lanzó poco después, en enero de 2009.
                </Typography>
              </CardContent>
              <CardActions>
                <Button component={Link} to="/coins/bitcoin" size="medium">
                  Detalles
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  pt: "20%",
                }}
                image={bnb}
                alt="image"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  BNB
                </Typography>
                <Typography>
                  BNB se lanzó a través de una oferta inicial de monedas en
                  2017, 11 días antes de que el exchange de criptomonedas
                  Binance se pusiera en marcha. BNB se puede utilizar como
                  método de pago, un token de utilidad para pagar las tarifas en
                  el exchange de Binance y para participar en las ventas de
                  tokens en la plataforma de lanzamiento de Binance.
                </Typography>
              </CardContent>
              <CardActions>
                <Button component={Link} to="/coins/binance-coin" size="medium">
                  Detalles
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default CoinsCards;
