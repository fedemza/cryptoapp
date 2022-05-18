import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Link } from "@mui/material";
import CoinInfoDetail from "../info/CoinInfoDetail";
import { Box } from "@mui/material";

const CoinDetail = () => {
  let { id } = useParams();
  const [coin, setCoin] = useState(null);
  console.log("coin", coin);

  return (
    <>
      <CoinInfoDetail coinId={id} setCoin={setCoin} />
      {coin === null ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <Box
            sx={{
              flexGrow: 1,
              display: { md: "flex" },
              justifyContent: "center",
              marginBottom: 20,
            }}
          >
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
                    src={coin.icon}
                    height="100px"
                    width="100px"
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
                    {coin.symbol}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    sx={{ display: { md: "flex" }, justifyContent: "center" }}
                  >
                    {coin.name}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h3"
                    sx={{ display: { md: "flex" }, justifyContent: "center" }}
                  >
                    Rank: {coin.rank}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h3"
                    sx={{ display: { md: "flex" }, justifyContent: "center" }}
                  >
                    Market Cap: $ {coin.marketCap.toFixed(2)}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h3"
                    sx={{ display: { md: "flex" }, justifyContent: "center" }}
                  >
                    Price: $ {coin.price.toFixed(2)}
                  </Typography>
                  <Typography
                    color="text.secondary"
                    sx={{ display: { md: "flex" }, justifyContent: "center" }}
                  >
                    Price change 1 week: {coin.priceChange1w} % <br /> Price
                    change 1 day: {coin.priceChange1d} % <br /> Price change 1
                    hour: {coin.priceChange1h} %
                  </Typography>
                  <Typography
                    color="text.secondary"
                    sx={{ display: { md: "flex" }, justifyContent: "center" }}
                  >
                    <bold>
                      Website:{" "}
                      <Link href={coin.websiteUrl}>{coin.websiteUrl}</Link>
                    </bold>
                  </Typography>
                  <Typography
                    color="text.secondary"
                    sx={{ display: { md: "flex" }, justifyContent: "center" }}
                  >
                    <bold>
                      Twitter:{" "}
                      <Link href={coin.twitterUrl}>{coin.twitterUrl}</Link>
                    </bold>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions></CardActions>
            </Card>
          </Box>
        </div>
      )}
    </>
  );
};

export default CoinDetail;
