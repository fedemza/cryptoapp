import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Link, Button, Stack } from "@mui/material";

import { Box } from "@mui/material";
import Loading from "../commons/Loading";

import { getChangeArg, getCoinDetails } from "../../redux/actions";
import { useNavigate } from "react-router-dom";

const CoinDetail = ({ id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getCoinDetails(id, setLoading));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(getChangeArg(setLoading));
  }, [dispatch]);

  const coin = useSelector((state) => state.coin_detail);
  const changeArg = useSelector((state) => state.changeArg);

  if ((coin && coin === null) || coin === undefined) {
    navigate("*");
  }

  const icon = coin && coin.icon;
  const symbol = coin && coin.symbol;
  const name = coin && coin.name;
  const rank = coin && coin.rank;
  const marketCap = coin && coin.marketCap;
  const price = coin && coin.price.toFixed(2);
  const priceArg =
    coin && changeArg && (parseFloat(changeArg) * coin.price).toFixed(2);
  const priceChange1w = coin && coin.priceChange1w;
  const priceChange1d = coin && coin.priceChange1d;
  const priceChange1h = coin && coin.priceChange1h;
  const websiteUrl = coin && coin.websiteUrl;
  const twitterUrl = coin && coin.twitterUrl;

  return (
    <>
      {loading || !coin ? (
        <Loading />
      ) : (
        <div>
          <Box
            sx={{
              flexGrow: 1,
              display: { md: "flex" },
              justifyContent: "center",
              marginBottom: 10,
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
                    Cambio de Precio 1 Semana: {priceChange1w} % <br /> Cambio
                    de Precio 1 Día: {priceChange1d} % <br /> Cambio de Precio 1
                    Hora: {priceChange1h} %
                  </Typography>
                  <Typography
                    color="text.secondary"
                    sx={{ display: { md: "flex" }, justifyContent: "center" }}
                  >
                    <>
                      Website: <Link href={websiteUrl}>{websiteUrl}</Link>
                    </>
                  </Typography>
                  <Typography
                    color="text.secondary"
                    sx={{ display: { md: "flex" }, justifyContent: "center" }}
                  >
                    <>
                      Twitter: <Link href={twitterUrl}>{twitterUrl}</Link>
                    </>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>{" "}
          </Box>

          <Stack
            sx={{ mb: 10 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button href="/coins" variant="contained">
              Cotizaciones
            </Button>
          </Stack>
        </div>
      )}
    </>
  );
};

export default CoinDetail;
