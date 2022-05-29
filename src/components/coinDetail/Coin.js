import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Button, Stack } from "@mui/material";

import { Box } from "@mui/material";

const Coin = ({
  icon,
  symbol,
  name,
  rank,
  marketCap,
  price,
  priceArg,
  priceChange1w,
  priceChange1d,
  priceChange1h,
  twitterUrl,
  websiteUrl,
}) => {
  return (
    <div>
      <Box
        sx={{
          flexGrow: 1,
          display: { md: "flex" },
          justifyContent: "center",
        }}
      >
        {" "}
        <Card
          sx={{
            maxWidth: 500,
            minHeight: 500,
            marginTop: 10,
            marginBottom: 2,
          }}
        >
          <CardActionArea>
            <Box sx={{ display: { md: "flex" }, justifyContent: "center" }}>
              <img
                src={icon}
                height="100px"
                width="100px"
                alt=" not found"
                sx={{ display: { md: "flex" }, justifyContent: "center" }}
              />
            </Box>

            <CardContent>
              <Typography
                gutterBottom
                variant="h3"
                component="h1"
                sx={{ display: { md: "flex" }, justifyContent: "center" }}
              >
                {symbol}
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                sx={{ display: { md: "flex" }, justifyContent: "center" }}
              >
                {name}
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="h3"
                sx={{ display: { md: "flex" }, justifyContent: "center" }}
              >
                Ranking: {rank}
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="h3"
                sx={{ display: { md: "flex" }, justifyContent: "center" }}
              >
                Cap. de Mercado: $ {marketCap}
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="h3"
                sx={{ display: { md: "flex" }, justifyContent: "center" }}
              >
                Precio (U$D): $ {price}
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="h3"
                sx={{ display: { md: "flex" }, justifyContent: "center" }}
              >
                Precio (ARG): $ {priceArg}
              </Typography>
              <Typography
                color="text.secondary"
                sx={{ display: { md: "flex" }, justifyContent: "center" }}
              >
                Cambio de Precio 1 Semana: {priceChange1w} % <br /> Cambio de
                Precio 1 Día: {priceChange1d} % <br /> Cambio de Precio 1 Hora:{" "}
                {priceChange1h} %
              </Typography>
              <Typography
                color="text.secondary"
                sx={{ display: { md: "flex" }, justifyContent: "center" }}
              >
                <>
                  Website: <a href={websiteUrl}>{websiteUrl}</a>
                </>
              </Typography>
              <Typography
                color="text.secondary"
                sx={{ display: { md: "flex" }, justifyContent: "center" }}
              >
                <>
                  Twitter: <a href={twitterUrl}>{twitterUrl}</a>
                </>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>{" "}
      </Box>

      <Stack
        sx={{ pb: 2, textDecoration: "none" }}
        direction="row"
        justifyContent="center"
      >
        <Button component={Link} to="/coins" variant="contained">
          Cotizaciones
        </Button>
      </Stack>
    </div>
  );
};

export default Coin;
