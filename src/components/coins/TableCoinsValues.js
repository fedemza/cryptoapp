import React from "react";
import TableCoins from "./TableCoins";

const TableCoinsValues = ({ coins }) => {
  const columns = [
    { id: "icon", label: "Logo", minWidth: 40 },
    { id: "rank", label: "Ranking", minWidth: 40 },
    { id: "symbol", label: "Código", minWidth: 40 },
    { id: "name", label: "Nombre", minWidth: 150 },
    { id: "price", label: "Precio (USD)", minWidth: 30 },
    { id: "priceChange1d", label: "24h%", minWidth: 40 },
    { id: "marketCap", label: "Cap. Mercado (USD)", minWidth: 60 },
  ];

  const createData = (
    id,
    rank,
    symbol,
    priceChange1d,
    icon,
    name,
    price,
    marketCap
  ) => {
    return { id, rank, symbol, priceChange1d, icon, name, price, marketCap };
  };

  const rows =
    coins &&
    coins.map((coin) =>
      createData(
        coin.id,
        coin.rank,
        coin.symbol,
        coin.priceChange1d,
        coin.icon,
        coin.name,
        coin.price,
        coin.marketCap
      )
    );

  return (
    <div>
      <TableCoins columns={columns} rows={rows} />
    </div>
  );
};

export default TableCoinsValues;
