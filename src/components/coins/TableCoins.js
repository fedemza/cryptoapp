import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "icon", label: "Logo", minWidth: 40 },
  { id: "rank", label: "Ranking", minWidth: 40 },
  { id: "symbol", label: "Código", minWidth: 40 },
  { id: "name", label: "Nombre", minWidth: 150 },
  { id: "price", label: "Precio (USD)", minWidth: 30 },
  { id: "priceChange1d", label: "24h%", minWidth: 40 },
  { id: "marketCap", label: "Cap. Mercado (USD)", minWidth: 60 },
];

const TableCoins = ({ coins }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

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

  const rows = coins.map((coin) =>
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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 700 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <TableCell
                  key={index}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {columns.map((column, index) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={index} align={column.align}>
                          <Link
                            to={row["id"]}
                            style={{ textDecoration: "none" }}
                          >
                            {typeof value === "string" &&
                            value[value.length - 4] +
                              value[value.length - 3] +
                              value[value.length - 2] +
                              value[value.length - 1] ===
                              ".png" ? (
                              <img
                                src={value}
                                alt="not found"
                                width="40px"
                                height="40px"
                              />
                            ) : column.id === "price" ? (
                              <p>$ {value.toFixed(2)}</p>
                            ) : column.id === "priceChange1d" ? (
                              <p> {value.toFixed(2)} %</p>
                            ) : column.id === "marketCap" ? (
                              <p> $ {value.toFixed(2)} </p>
                            ) : (
                              value
                            )}
                          </Link>
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

TableCoins.propTypes = {
  coins: PropTypes.arrayOf(PropTypes.object).isRequired,
};

TableCoins.defaultProps = {
  coins: [
    {
      id: "bitcoin",
      icon: "https://static.coinstats.app/coins/1650455588819.png",
      name: "Bitcoin",
      symbol: "BTC",
      rank: 1,
      price: 27860.18211979483,
      marketCap: 530568778945.9124,
      priceChange1d: 0,
    },
  ],
};

export default TableCoins;
